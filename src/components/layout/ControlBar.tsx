import * as Select from '@radix-ui/react-select';
import { ChevronDown, Check, Layers, BookMarked, SlidersHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';
import { useGrammarStore } from '../../store/useGrammarStore';
import { GRAMMAR_DOMAINS } from '../../data/grammarData';
import type { ActiveTab } from '../../types/grammar';
import { clsx } from 'clsx';

const TAB_OPTIONS: { value: ActiveTab; label: string }[] = [
  { value: 'all', label: 'All Panes' },
  { value: 'blueprint', label: 'Formula Blueprint' },
  { value: 'usage', label: 'Usage Context' },
  { value: 'traps', label: 'Native Traps' },
  { value: 'sandbox', label: 'Interactive Sandbox' },
];

function SelectRoot({
  value,
  onValueChange,
  placeholder,
  icon: Icon,
  children,
}: {
  value: string;
  onValueChange: (v: string) => void;
  placeholder: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <Select.Root value={value} onValueChange={onValueChange}>
      <Select.Trigger
        className={clsx(
          'flex items-center justify-between gap-2 w-full min-w-45',
          'px-3 py-2 rounded-md text-sm font-sans',
          'bg-white/5 border border-white/10 text-second/80',
          'hover:bg-white/8 hover:border-white/20',
          'focus:outline-none focus:border-decor/50 transition-colors duration-200',
          'data-placeholder:text-second/40'
        )}
      >
        <span className="flex items-center gap-2">
          <Icon size={14} className="text-decor/70 shrink-0" />
          <Select.Value placeholder={placeholder} />
        </span>
        <Select.Icon>
          <ChevronDown size={14} className="text-second/40" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          className="z-50 overflow-hidden rounded-md bg-[#1a1918] border border-white/10 shadow-xl shadow-black/40"
          position="popper"
          sideOffset={6}
          style={{ minWidth: 'var(--radix-select-trigger-width)' }}
        >
          <Select.ScrollUpButton className="flex items-center justify-center h-6 text-second/40">
            <ChevronDown size={12} className="rotate-180" />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-1">{children}</Select.Viewport>
          <Select.ScrollDownButton className="flex items-center justify-center h-6 text-second/40">
            <ChevronDown size={12} />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

function SelectItem({ value, children }: { value: string; children: React.ReactNode }) {
  return (
    <Select.Item
      value={value}
      className={clsx(
        'relative flex items-center gap-2 px-3 py-2 pr-8 text-sm font-sans rounded-md',
        'text-second/70 cursor-pointer select-none',
        'data-highlighted:bg-decor/10 data-highlighted:text-second',
        'data-[state=checked]:text-decor data-[state=checked]:bg-decor/10',
        'transition-colors duration-150 focus:outline-none'
      )}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute right-2">
        <Check size={12} />
      </Select.ItemIndicator>
    </Select.Item>
  );
}

export function ControlBar() {
  const { selectedDomainId, selectedSubtypeId, activeTab, setDomainId, setSubtypeId, setActiveTab } =
    useGrammarStore();

  const activeDomain = GRAMMAR_DOMAINS.find((d) => d.id === selectedDomainId);

  return (
    <motion.div
      className="flex flex-wrap items-center gap-3 px-6 md:px-10 py-4 border-b border-white/10 bg-white/2"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Domain Selector */}
      <div className="flex flex-col gap-1">
        <label className="text-[10px] font-sans uppercase tracking-widest text-second/30">Domain</label>
        <SelectRoot
          value={selectedDomainId}
          onValueChange={setDomainId}
          placeholder="Select domain"
          icon={Layers}
        >
          {GRAMMAR_DOMAINS.map((domain) => (
            <SelectItem key={domain.id} value={domain.id}>
              {domain.title}
            </SelectItem>
          ))}
        </SelectRoot>
      </div>

      {/* Subtype Selector */}
      <div className="flex flex-col gap-1">
        <label className="text-[10px] font-sans uppercase tracking-widest text-second/30">Subtype</label>
        <SelectRoot
          value={selectedSubtypeId}
          onValueChange={setSubtypeId}
          placeholder="Select subtype"
          icon={BookMarked}
        >
          {(activeDomain?.subtypes ?? []).map((sub) => (
            <SelectItem key={sub.id} value={sub.id}>
              {sub.title}
            </SelectItem>
          ))}
        </SelectRoot>
      </div>

      {/* View Filter */}
      <div className="flex flex-col gap-1">
        <label className="text-[10px] font-sans uppercase tracking-widest text-second/30">Focus Mode</label>
        <SelectRoot
          value={activeTab}
          onValueChange={(v) => setActiveTab(v as ActiveTab)}
          placeholder="All Panes"
          icon={SlidersHorizontal}
        >
          {TAB_OPTIONS.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectRoot>
      </div>

      {/* Domain Meta */}
      {activeDomain && (
        <div className="ml-auto flex items-center gap-2">
          <span
            className={clsx(
              'px-2 py-0.5 rounded-md text-[10px] font-sans font-semibold tracking-widest uppercase',
              {
                'bg-sky-500/15 text-sky-400 border border-sky-500/20': activeDomain.level === 'B1',
                'bg-violet-500/15 text-violet-400 border border-violet-500/20': activeDomain.level === 'B2',
                'bg-amber-500/15 text-amber-400 border border-amber-500/20': activeDomain.level === 'C1',
              }
            )}
          >
            {activeDomain.level}
          </span>
          <span className="text-xs font-sans text-second/30 hidden sm:block">{activeDomain.category}</span>
        </div>
      )}
    </motion.div>
  );
}

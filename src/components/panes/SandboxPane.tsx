import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlaskConical, Lightbulb, RotateCcw, Send, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { GrammarSubtype, SandboxChallenge } from '../../types/grammar';
import { clsx } from 'clsx';

interface Props {
  subtype: GrammarSubtype;
}

type Status = 'idle' | 'correct' | 'incorrect';

interface ChallengeCardProps {
  challenge: SandboxChallenge;
  challenges: SandboxChallenge[];
  onSelectChallenge: (id: string) => void;
  completedIds: Record<string, boolean>;
  onMarkCompleted: (id: string) => void;
}

function ChallengeCard({
  challenge,
  challenges,
  onSelectChallenge,
  completedIds,
  onMarkCompleted,
}: ChallengeCardProps) {
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [showHint, setShowHint] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const normalize = (s: string) =>
    s.trim().toLowerCase().replace(/\s+/g, ' ').replace(/['']/g, "'");

  const handleSubmit = () => {
    if (!input.trim()) return;
    const isCorrect = normalize(input) === normalize(challenge.targetAnswer);
    setStatus(isCorrect ? 'correct' : 'incorrect');

    if (isCorrect) {
      onMarkCompleted(challenge.id);
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#D046FE', '#a855f7', '#7c3aed', '#F9FBFF'],
      });
    }
  };

  const handleReset = () => {
    setInput('');
    setStatus('idle');
    setShowHint(false);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSubmit();
  };

  const currentIndex = challenges.findIndex((c) => c.id === challenge.id);

  return (
    <motion.div
      className={clsx(
        'rounded-md border overflow-hidden transition-colors duration-300',
        status === 'correct' && 'border-emerald-500/30 bg-emerald-500/5',
        status === 'incorrect' && 'border-red-500/25 bg-red-500/5',
        status === 'idle' && 'border-white/10 bg-white/3'
      )}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Dropdown Menu Header: Select Example */}
      <div className="px-4 py-3 border-b border-white/10 bg-white/2 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
        <label
          htmlFor="example-dropdown"
          className="text-xs font-sans text-second/60 font-medium flex items-center justify-between sm:justify-start gap-2 shrink-0"
        >
          <span className="uppercase tracking-wider">Example:</span>
          <span className="text-[11px] px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-second/50">
            {currentIndex + 1} of {challenges.length}
          </span>
        </label>

        <div className="relative w-full sm:max-w-md">
          <select
            id="example-dropdown"
            value={challenge.id}
            onChange={(e) => onSelectChallenge(e.target.value)}
            className="w-full appearance-none pl-3 pr-8 py-2 sm:py-1.5 rounded-md bg-white/5 border border-white/15 text-second text-xs font-sans focus:outline-none focus:border-decor/60 transition-colors cursor-pointer truncate"
          >
            {challenges.map((c, i) => {
              const isCompleted = completedIds[c.id];
              return (
                <option
                  key={c.id}
                  value={c.id}
                  className="bg-[#14151b] text-second text-xs py-1"
                >
                  {isCompleted ? '✓ ' : ''}Example {i + 1}: {c.prompt}
                </option>
              );
            })}
          </select>
          <ChevronDown
            size={14}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-second/40 pointer-events-none"
          />
        </div>
      </div>

      {/* Prompt */}
      <div className="px-4 py-3.5 border-b border-white/10 bg-white/1">
        <p className="text-sm font-sans text-second/90 leading-relaxed">{challenge.prompt}</p>
      </div>

      {/* Input area */}
      <div className="p-4 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              if (status !== 'idle') setStatus('idle');
            }}
            onKeyDown={handleKeyDown}
            disabled={status === 'correct'}
            placeholder="Type your answer here..."
            className={clsx(
              'flex-1 min-w-0 px-3 py-2 rounded-md text-sm font-sans bg-white/5 border',
              'text-second placeholder:text-second/25',
              'focus:outline-none transition-colors duration-200',
              status === 'correct'
                ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
                : status === 'incorrect'
                ? 'border-red-500/35 bg-red-500/10 text-red-300'
                : 'border-white/15 focus:border-decor/50'
            )}
          />

          {status === 'correct' ? (
            <button
              onClick={handleReset}
              className="shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-md bg-white/8 border border-white/15 text-second/60 text-sm font-sans hover:border-white/25 hover:text-second/80 transition-colors duration-200"
              title="Reset challenge"
            >
              <RotateCcw size={14} />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!input.trim()}
              className={clsx(
                'shrink-0 flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-sm font-sans border transition-colors duration-200',
                'disabled:opacity-30 disabled:cursor-not-allowed',
                'bg-decor/15 border-decor/30 text-decor hover:bg-decor/22 hover:border-decor/50'
              )}
            >
              <Send size={14} />
              <span>Check</span>
            </button>
          )}
        </div>

        {/* Status feedback */}
        <AnimatePresence>
          {status === 'correct' && (
            <motion.div
              className="flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-sans"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              ✓ Excellent! That's correct.
            </motion.div>
          )}
          {status === 'incorrect' && (
            <motion.div
              className="flex items-center gap-2 px-3 py-2 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-sans"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              ✗ Not quite — try again or reveal the hint.
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hint toggle */}
        <div>
          <button
            onClick={() => setShowHint((v) => !v)}
            className="flex items-center gap-1.5 text-xs font-sans text-second/40 hover:text-second/70 transition-colors duration-200"
          >
            <Lightbulb size={12} className={clsx(showHint ? 'text-amber-400' : 'text-second/40')} />
            {showHint ? 'Hide hint' : 'Show hint'}
          </button>

          <AnimatePresence>
            {showHint && (
              <motion.div
                className="mt-2 px-3 py-2 rounded-md bg-amber-500/8 border border-amber-500/20 text-amber-300/80 text-sm font-sans"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                💡 {challenge.hint}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export function SandboxPane({ subtype }: Props) {
  const challenges = subtype.sandboxChallenges;
  const [currentSubtypeId, setCurrentSubtypeId] = useState(subtype.id);
  const [selectedId, setSelectedId] = useState<string>(challenges[0]?.id || '');
  const [completedIds, setCompletedIds] = useState<Record<string, boolean>>({});

  // Reset selected challenge when switching grammar subtypes
  if (currentSubtypeId !== subtype.id) {
    setCurrentSubtypeId(subtype.id);
    setSelectedId(challenges[0]?.id || '');
  }

  const activeChallenge =
    challenges.find((c) => c.id === selectedId) || challenges[0];

  const handleMarkCompleted = (id: string) => {
    setCompletedIds((prev) => ({ ...prev, [id]: true }));
  };

  if (!activeChallenge) {
    return null;
  }

  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <FlaskConical size={16} className="text-decor" />
        <h2 className="text-sm font-sans font-semibold uppercase tracking-widest text-second/60">
          Interactive Sandbox
        </h2>
      </div>

      <ChallengeCard
        key={activeChallenge.id}
        challenge={activeChallenge}
        challenges={challenges}
        onSelectChallenge={setSelectedId}
        completedIds={completedIds}
        onMarkCompleted={handleMarkCompleted}
      />
    </section>
  );
}

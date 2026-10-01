import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import type { GrammarSubtype } from '../../types/grammar';
import { clsx } from 'clsx';

interface Props {
  subtype: GrammarSubtype;
}

const REGISTER_STYLES: Record<string, string> = {
  Casual: 'bg-sky-500/10 border-sky-500/25 text-sky-400',
  Workplace: 'bg-violet-500/10 border-violet-500/25 text-violet-400',
  Formal: 'bg-amber-500/10 border-amber-500/25 text-amber-400',
  Universal: 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400',
};

export function UsageContextPane({ subtype }: Props) {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <MessageSquare size={16} className="text-decor" />
        <h2 className="text-sm font-sans font-semibold uppercase tracking-widest text-second/60">
          Usage Context
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {subtype.usageScenarios.map((scenario, si) => (
          <motion.div
            key={si}
            className="rounded-md border border-white/10 bg-white/3 p-4 flex flex-col gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: si * 0.07 }}
          >
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <h3 className="font-sans font-semibold text-second/90 text-sm">{scenario.context}</h3>
              <span
                className={clsx(
                  'px-2 py-0.5 rounded-md text-[10px] font-sans font-bold uppercase tracking-widest border shrink-0',
                  REGISTER_STYLES[scenario.register] ?? 'bg-white/10 border-white/20 text-second/50'
                )}
              >
                {scenario.register}
              </span>
            </div>

            <p className="text-sm font-sans text-second/55">{scenario.description}</p>

            <div className="mt-1 rounded-md bg-white/5 border border-white/8 px-3 py-2.5">
              <p className="text-sm font-sans text-second/80 italic">"{scenario.example}"</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

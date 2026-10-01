import { motion } from 'framer-motion';
import { Braces } from 'lucide-react';
import type { GrammarSubtype } from '../../types/grammar';
import { clsx } from 'clsx';

interface Props {
  subtype: GrammarSubtype;
}

const CLAUSE_COLORS = [
  'bg-decor/10 border-decor/30 text-decor',
  'bg-sky-500/10 border-sky-500/30 text-sky-300',
  'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
  'bg-amber-500/10 border-amber-500/30 text-amber-300',
];

export function FormulaBlueprint({ subtype }: Props) {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Braces size={16} className="text-decor" />
        <h2 className="text-sm font-sans font-semibold uppercase tracking-widest text-second/60">
          Formula Blueprint
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {subtype.formulas.map((formula, fi) => (
          <motion.div
            key={fi}
            className="rounded-md border border-white/10 bg-white/3 overflow-hidden"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: fi * 0.06 }}
          >
            {/* Label */}
            <div className="px-4 py-2.5 border-b border-white/10 flex items-center gap-2">
              <span
                className={clsx(
                  'px-2 py-0.5 rounded-md text-[10px] font-sans font-bold uppercase tracking-widest border',
                  CLAUSE_COLORS[fi % CLAUSE_COLORS.length]
                )}
              >
                {formula.label}
              </span>
            </div>

            {/* Pattern */}
            <div className="px-4 py-3 border-b border-white/8">
              <p className="font-sans text-lg text-second/90 leading-snug">{formula.pattern}</p>
            </div>

            {/* Examples */}
            <div className="px-4 py-3 flex flex-col gap-2">
              {formula.examples.map((ex, ei) => (
                <div key={ei} className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-decor/60 shrink-0" />
                  <p className="text-sm font-sans text-second/70 italic">{ex}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

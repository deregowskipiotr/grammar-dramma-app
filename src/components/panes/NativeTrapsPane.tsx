import { motion } from 'framer-motion';
import { AlertTriangle, X, Check } from 'lucide-react';
import type { GrammarSubtype } from '../../types/grammar';

interface Props {
  subtype: GrammarSubtype;
}

export function NativeTrapsPane({ subtype }: Props) {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <AlertTriangle size={16} className="text-amber-400" />
        <h2 className="text-sm font-sans font-semibold uppercase tracking-widest text-second/60">
          Native Traps
        </h2>
      </div>

      <div className="flex flex-col gap-5">
        {subtype.nativeTraps.map((trap, ti) => (
          <motion.div
            key={ti}
            className="rounded-md border border-amber-500/20 bg-amber-500/5 overflow-hidden"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: ti * 0.08 }}
          >
            {/* Title */}
            <div className="px-4 py-3 border-b border-amber-500/15 flex items-center gap-2">
              <AlertTriangle size={13} className="text-amber-400 shrink-0" />
              <h3 className="font-sans font-semibold text-amber-300 text-sm">{trap.title}</h3>
            </div>

            <div className="p-4 flex flex-col gap-4">
              <p className="text-sm font-sans text-second/55">{trap.description}</p>

              {/* Side-by-side comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Incorrect */}
                <div className="rounded-md border border-red-500/25 bg-red-500/8 p-3 flex flex-col gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="flex items-center justify-center w-4 h-4 rounded-full bg-red-500/20">
                      <X size={10} className="text-red-400" />
                    </span>
                    <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-red-400">
                      Incorrect
                    </span>
                  </div>
                  <p className="text-sm font-sans text-red-300/80 italic">"{trap.incorrectExample}"</p>
                </div>

                {/* Correct */}
                <div className="rounded-md border border-emerald-500/25 bg-emerald-500/8 p-3 flex flex-col gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="flex items-center justify-center w-4 h-4 rounded-full bg-emerald-500/20">
                      <Check size={10} className="text-emerald-400" />
                    </span>
                    <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-emerald-400">
                      Correct
                    </span>
                  </div>
                  <p className="text-sm font-sans text-emerald-300/80 italic">"{trap.correctExample}"</p>
                </div>
              </div>

              {/* Explanation */}
              <div className="flex items-start gap-2 bg-white/5 border border-white/8 rounded-md px-3 py-2.5">
                <span className="mt-0.5 text-amber-400 shrink-0">→</span>
                <p className="text-sm font-sans text-second/65">{trap.explanation}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

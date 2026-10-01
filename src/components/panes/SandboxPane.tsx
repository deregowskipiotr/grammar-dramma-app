import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlaskConical, Lightbulb, RotateCcw, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { GrammarSubtype, SandboxChallenge } from '../../types/grammar';
import { clsx } from 'clsx';

interface Props {
  subtype: GrammarSubtype;
}

type Status = 'idle' | 'correct' | 'incorrect';

function ChallengeCard({ challenge }: { challenge: SandboxChallenge }) {
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

  return (
    <motion.div
      className={clsx(
        'rounded-md border overflow-hidden transition-colors duration-300',
        status === 'correct' && 'border-emerald-500/30 bg-emerald-500/5',
        status === 'incorrect' && 'border-red-500/25 bg-red-500/5',
        status === 'idle' && 'border-white/10 bg-white/3'
      )}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Prompt */}
      <div className="px-4 py-3 border-b border-white/10">
        <p className="text-sm font-sans text-second/80">{challenge.prompt}</p>
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
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <FlaskConical size={16} className="text-decor" />
        <h2 className="text-sm font-sans font-semibold uppercase tracking-widest text-second/60">
          Interactive Sandbox
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {subtype.sandboxChallenges.map((challenge) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>
    </section>
  );
}

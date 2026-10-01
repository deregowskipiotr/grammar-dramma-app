import { AnimatePresence, motion } from 'framer-motion';
import { Header } from './components/layout/Header';
import { ControlBar } from './components/layout/ControlBar';
import { FormulaBlueprint } from './components/panes/FormulaBlueprint';
import { UsageContextPane } from './components/panes/UsageContextPane';
import { NativeTrapsPane } from './components/panes/NativeTrapsPane';
import { SandboxPane } from './components/panes/SandboxPane';
import { useGrammarStore } from './store/useGrammarStore';
import { GRAMMAR_DOMAINS } from './data/grammarData';

const PANE_VARIANTS = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

export default function App() {
  const { selectedDomainId, selectedSubtypeId, activeTab } = useGrammarStore();

  const activeDomain = GRAMMAR_DOMAINS.find((d) => d.id === selectedDomainId);
  const activeSubtype = activeDomain?.subtypes.find((s) => s.id === selectedSubtypeId);

  const showBlueprint = activeTab === 'all' || activeTab === 'blueprint';
  const showUsage = activeTab === 'all' || activeTab === 'usage';
  const showTraps = activeTab === 'all' || activeTab === 'traps';
  const showSandbox = activeTab === 'all' || activeTab === 'sandbox';

  return (
    <div className="relative z-1 flex flex-col min-h-screen">
      <Header />
      <ControlBar />

      <main className="flex-1 px-6 md:px-10 py-8">
        {activeSubtype ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedDomainId}-${selectedSubtypeId}-${activeTab}`}
              variants={PANE_VARIANTS}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.28, ease: 'easeOut' }}
            >
              {/* Subtype title block */}
              <div className="mb-8">
                <p className="text-xs font-sans uppercase tracking-widest text-decor/60 mb-1">
                  {activeDomain?.title}
                </p>
                <h2 className="font-instrument text-3xl md:text-4xl text-second font-bold">
                  {activeSubtype.title}
                </h2>
                <p className="mt-2 text-sm font-sans text-second/50 max-w-2xl">
                  {activeSubtype.description}
                </p>
              </div>

              {/* Responsive pane grid */}
              <div
                className={
                  activeTab === 'all'
                    ? 'grid grid-cols-1 lg:grid-cols-2 gap-6'
                    : 'max-w-3xl mx-auto'
                }
              >
                {showBlueprint && (
                  <div className="rounded-md border border-white/8 bg-white/2 p-6">
                    <FormulaBlueprint subtype={activeSubtype} />
                  </div>
                )}

                {showUsage && (
                  <div className="rounded-md border border-white/8 bg-white/2 p-6">
                    <UsageContextPane subtype={activeSubtype} />
                  </div>
                )}

                {showTraps && (
                  <div className="rounded-md border border-white/8 bg-white/2 p-6">
                    <NativeTrapsPane subtype={activeSubtype} />
                  </div>
                )}

                {showSandbox && (
                  <div className="rounded-md border border-white/8 bg-white/2 p-6">
                    <SandboxPane subtype={activeSubtype} />
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="flex items-center justify-center h-64 text-second/30 font-sans text-sm">
            Select a domain and subtype to begin.
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="px-6 md:px-10 py-4 border-t border-white/8 text-xs font-sans text-second/25 flex items-center justify-between flex-wrap gap-2">
        <span>Grammar Dramma — B1–B2 English Grammar Hub</span>
        <span>Built with React 19 · Tailwind CSS v4 · Framer Motion</span>
      </footer>
    </div>
  );
}
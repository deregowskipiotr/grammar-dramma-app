import { BookOpen } from 'lucide-react';
import { GRAMMAR_DOMAINS } from '../../data/grammarData';

export function Header() {
  const totalDomains = GRAMMAR_DOMAINS.length;
  const totalSubtypes = GRAMMAR_DOMAINS.reduce((acc, d) => acc + d.subtypes.length, 0);

  return (
    <header className="relative z-10 flex flex-col gap-3 pt-8 pb-6 px-6 md:px-10 border-b border-white/10">
      <div className="flex items-center justify-between flex-wrap gap-4">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-md bg-decor/15 border border-decor/30">
            <BookOpen size={20} className="text-decor" />
          </div>
          <div>
            <h1 className="font-instrument text-2xl md:text-3xl font-bold tracking-tight text-second leading-none">
              Grammar{' '}
              <span className="text-decor italic">Dramma</span>
            </h1>
            <p className="text-xs text-second/40 mt-0.5 font-sans tracking-widest uppercase">
              B1 – B2 English Grammar Hub
            </p>
          </div>
        </div>

        {/* Stats Badge */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10">
            <span className="text-decor font-bold font-sans text-sm">{totalDomains}</span>
            <span className="text-second/50 text-xs font-sans">domains</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10">
            <span className="text-decor font-bold font-sans text-sm">{totalSubtypes}</span>
            <span className="text-second/50 text-xs font-sans">subtopics</span>
          </div>
        </div>
      </div>
    </header>
  );
}

import { create } from 'zustand';
import type { ActiveTab, GrammarDomainId } from '../types/grammar';
import { GRAMMAR_DOMAINS } from '../data/grammarData';

interface GrammarState {
  selectedDomainId: GrammarDomainId;
  selectedSubtypeId: string;
  activeTab: ActiveTab;
  setDomainId: (id: GrammarDomainId) => void;
  setSubtypeId: (id: string) => void;
  setActiveTab: (tab: ActiveTab) => void;
}

export const useGrammarStore = create<GrammarState>((set) => ({
  selectedDomainId: GRAMMAR_DOMAINS[0].id,
  selectedSubtypeId: GRAMMAR_DOMAINS[0].subtypes[0].id,
  activeTab: 'all',

  setDomainId: (id) => {
    const domain = GRAMMAR_DOMAINS.find((d) => d.id === id);
    const firstSubtypeId = domain?.subtypes[0]?.id ?? '';
    set({ selectedDomainId: id, selectedSubtypeId: firstSubtypeId });
  },

  setSubtypeId: (id) => set({ selectedSubtypeId: id }),

  setActiveTab: (tab) => set({ activeTab: tab }),
}));

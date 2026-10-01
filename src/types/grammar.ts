export type CEFRLevel = 'B1' | 'B2' | 'C1';

export type GrammarCategory =
  | 'Sentence Architecture'
  | 'Speculation & Distance'
  | 'Precision & Objectivity'
  | 'Flow & Natural Expression';

export type GrammarDomainId = string; // Fully dynamic string ID to allow seamless extensions

export interface FormulaBlock {
  label: string;
  pattern: string;
  examples: string[];
}

export interface UsageScenario {
  context: string;
  description: string;
  register: 'Casual' | 'Workplace' | 'Formal' | 'Universal';
  example: string;
}

export interface NativeTrap {
  title: string;
  description: string;
  incorrectExample: string;
  correctExample: string;
  explanation: string;
}

export interface SandboxChallenge {
  id: string;
  prompt: string;
  initialText?: string;
  targetAnswer: string;
  hint: string;
  type: 'transform' | 'fill-gap';
}

export interface GrammarSubtype {
  id: string;
  title: string;
  description: string;
  formulas: FormulaBlock[];
  usageScenarios: UsageScenario[];
  nativeTraps: NativeTrap[];
  sandboxChallenges: SandboxChallenge[];
}

export interface GrammarDomain {
  id: GrammarDomainId;
  title: string;
  category: GrammarCategory;
  level: CEFRLevel;
  description: string;
  subtypes: GrammarSubtype[];
}

export type ActiveTab = 'all' | 'blueprint' | 'usage' | 'traps' | 'sandbox';

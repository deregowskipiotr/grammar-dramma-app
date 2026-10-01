# TASK SPECIFICATION: "Grammar Dramma" App Development

You are an expert Senior Frontend Engineer specializing in React 19, TypeScript, Tailwind CSS v4, Framer Motion, and Zustand. Build the core architecture, state management, static dataset, and dynamic dashboard views for "Grammar Dramma" — an interactive English grammar hub built for B1–B2 learners.

---

## 1. Project Context & Design Tokens

Use ONLY the provided theme variables in Tailwind CSS v4:
- Background: `bg-main` (`#121110`)
- Primary Text / Surfaces: `text-second` / high-contrast cards (`#F9FBFF`)
- Accent / Highlights: `decor` (`#D046FE`)
- Typography: Use `--font-instrument` (`font-instrument`) for display headings/accents and default sans-serif for body/dense UI text.

Aesthetic Guidelines:
- Modern, high-contrast dark dashboard layout.
- Solid dark cards with subtle borders (`border-white/10`), crisp padding, clean micro-interactions, and visual hierarchy.
- Use `lucide-react` icons for section badges, alert icons, and controls.
- Use `framer-motion` for smooth layout transitions when switching between grammar domains or focus modes.
- Use only 'rounded-md' class for all UI elements including buttons, cards etc.
- Don't use 'scale' property in hover effects, use opacity and border color instead.

,
---

## 2. Architecture & Directory Structure

Organize the codebase logically under `src/`:

src/├── types/│   └── grammar.ts            # TypeScript interfaces & Zod schemas├── data/│   └── grammarData.ts        # Comprehensive dataset (Conditionals, Reported Speech, etc.)├── store/│   └── useGrammarStore.ts    # Zustand store for cascading active state├── components/│   ├── layout/│   │   ├── Header.tsx        # App title with Bodoni/Instrument styling & stats badge│   │   └── ControlBar.tsx    # Cascading selectors using Radix / custom select│   ├── panes/│   │   ├── FormulaBlueprint.tsx   # Color-coded structure & formula view│   │   ├── UsageContextPane.tsx   # Real-world usage scenarios & register badges│   │   ├── NativeTrapsPane.tsx    # Edge cases, native-transfer traps (e.g. Polish -> EN)│   │   └── SandboxPane.tsx        # Interactive transformation/practice tester│   └── ui/                   # Reusable card wrappers, badges, buttons└── App.tsx                   # Main layout grid container
---

## 3. Data Schema & Types (`src/types/grammar.ts`)

Define clear interfaces for data-driven rendering:

// ==========================================
// 3. UPDATED TYPES (src/types/grammar.ts)
// ==========================================

export type CEFRLevel = 'B1' | 'B2' | 'C1';

export type GrammarCategory = 
  | 'Sentence Architecture' 
  | 'Speculation & Distance' 
  | 'Precision & Objectivity' 
  | 'Flow & Natural Expression';

export type GrammarDomainId = string; // Fully dynamic string ID to allow seamless extensions

export interface FormulaBlock {
  label: string; // e.g., "Direct Speech", "Reported Speech", "If Clause", "Main Clause"
  pattern: string; // e.g., "Present Continuous -> Past Continuous", "If + Past Perfect"
  examples: string[];
}

export interface UsageScenario {
  context: string; // e.g., "Reporting past conversations", "Hypothetical regret"
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
  title: string; // e.g., "Tense Backshifts", "Negative Adverb Inversion", "Mixed Conditionals"
  description: string;
  formulas: FormulaBlock[];
  usageScenarios: UsageScenario[];
  nativeTraps: NativeTrap[];
  sandboxChallenges: SandboxChallenge[];
}

export interface GrammarDomain {
  id: GrammarDomainId;
  title: string; // e.g., "Reported Speech", "Inversion & Emphasis", "Conditionals & Wish"
  category: GrammarCategory;
  level: CEFRLevel;
  description: string;
  subtypes: GrammarSubtype[];
}

4. Dataset Requirements (src/data/grammarData.ts)

// ==========================================
// 4. EXPANDED DATASET ARRAY (src/data/grammarData.ts)
// ==========================================

export const GRAMMAR_DOMAINS: GrammarDomain[] = [
  // -------------------------------------------------------------
  // 1. CONDITIONALS & WISH
  // -------------------------------------------------------------
  {
    id: 'conditionals',
    title: 'Conditionals & Unreal Past',
    category: 'Sentence Architecture',
    level: 'B2',
    description: 'Mastering real, hypothetical, mixed time-frames, and wish structures.',
    subtypes: [
      {
        id: 'zero-first-conditional',
        title: 'Zero & 1st Conditional',
        description: 'General truths, scientific facts, and real future possibilities.',
        formulas: [
          { label: 'Zero Conditional', pattern: 'If + Present Simple, Present Simple', examples: ['If you heat water to 100°C, it boils.'] },
          { label: '1st Conditional', pattern: 'If + Present Simple, Will + Bare Infinitive', examples: ['If we send the email today, we will get a response tomorrow.'] }
        ],
        usageScenarios: [
          { context: 'Standard Rules', description: 'Stating facts or immediate consequences.', register: 'Universal', example: 'If you leave food out, it spoils.' },
          { context: 'Business Commitments', description: 'Promising future actions contingent on conditions.', register: 'Workplace', example: 'If we approve the contract, we will start next week.' }
        ],
        nativeTraps: [
          {
            title: 'Using "Will" inside the If-Clause',
            description: 'Directly translating future intent into the condition.',
            incorrectExample: 'If it will rain tomorrow, we will stay home.',
            correctExample: 'If it rains tomorrow, we will stay home.',
            explanation: 'The conditional clause requires Present Simple for future meaning.'
          }
        ],
        sandboxChallenges: [
          {
            id: 'cond1-1',
            prompt: 'Convert to 1st Conditional: "You (study) hard, you (pass) the exam."',
            targetAnswer: 'If you study hard, you will pass the exam.',
            hint: 'Use Present Simple in the if-clause and will + infinitive in the main clause.',
            type: 'transform'
          }
        ]
      },
      {
        id: 'second-third-conditional',
        title: '2nd & 3rd Conditional',
        description: 'Unreal present situations and past hypothetical regrets.',
        formulas: [
          { label: '2nd Conditional', pattern: 'If + Past Simple, Would + Bare Infinitive', examples: ['If I had more time, I would learn Spanish.'] },
          { label: '3rd Conditional', pattern: 'If + Past Perfect, Would have + Past Participle', examples: ['If we had checked the schedule, we would not have missed the train.'] }
        ],
        usageScenarios: [
          { context: 'Hypothetical Advice', description: 'Giving advice using 2nd conditional.', register: 'Casual', example: 'If I were you, I would take the offer.' },
          { context: 'Project Post-Mortem', description: 'Analyzing past mistakes in business.', register: 'Workplace', example: 'If we had tested the feature, the bug would not have occurred.' }
        ],
        nativeTraps: [
          {
            title: 'Double "Would Have"',
            description: 'Putting "would have" in both clauses of a 3rd conditional.',
            incorrectExample: 'If I would have known, I would have called you.',
            correctExample: 'If I had known, I would have called you.',
            explanation: 'The condition clause MUST take Past Perfect ("had known"), not "would have".'
          }
        ],
        sandboxChallenges: [
          {
            id: 'cond2-1',
            prompt: 'Complete 3rd Conditional: "If they (prepare) the report, the client (approve) it."',
            targetAnswer: 'If they had prepared the report, the client would have approved it.',
            hint: 'Use Had + Past Participle in the if-clause and Would Have + Past Participle in the main clause.',
            type: 'transform'
          }
        ]
      },
      {
        id: 'mixed-conditionals',
        title: 'Mixed Conditionals',
        description: 'Connecting past actions to present effects, or ongoing conditions to past results.',
        formulas: [
          { label: 'Past Cause -> Present Effect', pattern: 'If + Past Perfect, Would + Bare Infinitive', examples: ['If I had taken that job in London, I would live there now.'] },
          { label: 'Present Condition -> Past Effect', pattern: 'If + Past Simple, Would have + Past Participle', examples: ['If she were more punctual, she would not have arrived late for the presentation.'] }
        ],
        usageScenarios: [
          { context: 'Life Reflections', description: 'Explaining how past choices shape your present state.', register: 'Casual', example: 'If I had saved money, I would be stress-free today.' }
        ],
        nativeTraps: [
          {
            title: 'Time Frame Mismatch',
            description: 'Failing to adjust the main clause verb when the effect is happening now.',
            incorrectExample: 'If I had slept better last night, I would have felt good now.',
            correctExample: 'If I had slept better last night, I would feel good now.',
            explanation: 'Use "would feel" because "now" indicates a present state resulting from a past event.'
          }
        ],
        sandboxChallenges: [
          {
            id: 'mixed-1',
            prompt: 'Combine: "I did not buy a ticket yesterday (past). I am not going to the event today (present)."',
            targetAnswer: 'If I had bought a ticket yesterday, I would go to the event today.',
            hint: 'Use Had + Past Participle in if-clause, Would + base verb in main clause.',
            type: 'transform'
          }
        ]
      }
    ]
  },

  // -------------------------------------------------------------
  // 2. REPORTED SPEECH
  // -------------------------------------------------------------
  {
    id: 'reported-speech',
    title: 'Reported Speech & Distance',
    category: 'Speculation & Distance',
    level: 'B2',
    description: 'Transforming direct conversations, tense backshifts, indirect questions, and reporting verbs.',
    subtypes: [
      {
        id: 'tense-backshifts',
        title: 'Tense Backshifts',
        description: 'Shifting tenses backwards when reporting past statements.',
        formulas: [
          { label: 'Present Simple -> Past Simple', pattern: '"I work here" -> He said he worked there', examples: ['Direct: "I need help." -> Reported: She said she needed help.'] },
          { label: 'Present Perfect -> Past Perfect', pattern: '"I have finished" -> He said he had finished', examples: ['Direct: "We have sent the file." -> Reported: They said they had sent the file.'] },
          { label: 'Will -> Would', pattern: '"I will call" -> He said he would call', examples: ['Direct: "I will update you." -> Reported: He promised he would update me.'] }
        ],
        usageScenarios: [
          { context: 'Meeting Summaries', description: 'Relaying client feedback or colleague comments.', register: 'Workplace', example: 'The client stated that they were happy with the draft.' }
        ],
        nativeTraps: [
          {
            title: 'Forgetting Time/Place Marker Shifts',
            description: 'Keeping words like "tomorrow", "here", or "yesterday" unchanged in reported speech.',
            incorrectExample: 'He said he will come here tomorrow.',
            correctExample: 'He said he would come there the following day.',
            explanation: '"Tomorrow" becomes "the next day / following day", and "here" becomes "there".'
          }
        ],
        sandboxChallenges: [
          {
            id: 'rep-1',
            prompt: 'Report this statement: "I have already sent the invoice," said Mark.',
            targetAnswer: 'Mark said that he had already sent the invoice.',
            hint: 'Shift Present Perfect ("have sent") to Past Perfect ("had sent").',
            type: 'transform'
          }
        ]
      },
      {
        id: 'indirect-questions',
        title: 'Indirect & Reported Questions',
        description: 'Reporting Wh- questions and Yes/No questions using correct word order.',
        formulas: [
          { label: 'Yes/No Questions', pattern: 'Ask + If / Whether + Subject + Verb', examples: ['Direct: "Are you ready?" -> She asked if I was ready.'] },
          { label: 'Wh- Questions', pattern: 'Ask + Wh-word + Subject + Verb', examples: ['Direct: "Where do you live?" -> He asked where I lived.'] }
        ],
        usageScenarios: [
          { context: 'Polite Inquiries', description: 'Formulating polite or business-appropriate questions.', register: 'Workplace', example: 'I was wondering if you could provide more details.' }
        ],
        nativeTraps: [
          {
            title: 'Inverted Question Word Order in Indirect Questions',
            description: 'Using auxiliary verb before subject in reported questions.',
            incorrectExample: 'She asked me where did I live.',
            correctExample: 'She asked me where I lived.',
            explanation: 'Reported questions take affirmative sentence word order (Subject + Verb), NOT question order.'
          }
        ],
        sandboxChallenges: [
          {
            id: 'rep-q1',
            prompt: 'Report this question: "Where is the manager?" asked John.',
            targetAnswer: 'John asked where the manager was.',
            hint: 'Use Wh-word + Subject + Verb order without auxiliary inversion.',
            type: 'transform'
          }
        ]
      }
    ]
  },

  // -------------------------------------------------------------
  // 3. INVERSION & EMPHASIS
  // -------------------------------------------------------------
  {
    id: 'inversion',
    title: 'Inversion & Emphasis',
    category: 'Sentence Architecture',
    level: 'C1',
    description: 'Using negative adverbs, fronting, and inverted structures for dramatic effect and high-level style.',
    subtypes: [
      {
        id: 'negative-adverbs',
        title: 'Negative Adverb Inversion',
        description: 'Inverting subject and auxiliary verb after restrictive or negative adverbials.',
        formulas: [
          { label: 'Hardly / Scarcely', pattern: 'Hardly + Had + Subject + Past Participle + When...', examples: ['Hardly had I entered the room when the phone rang.'] },
          { label: 'Not Only... But Also', pattern: 'Not only + Auxiliary + Subject + Verb...', examples: ['Not only did she pass the exam, but she also scored top marks.'] },
          { label: 'Seldom / Rarely', pattern: 'Seldom + Auxiliary + Subject + Verb', examples: ['Seldom have we witnessed such outstanding performance.'] }
        ],
        usageScenarios: [
          { context: 'Keynote Speeches & Essays', description: 'Adding stylistic impact to formal presentations or writing.', register: 'Formal', example: 'Rarely do we encounter such dedication in project development.' }
        ],
        nativeTraps: [
          {
            title: 'Forgetting Auxiliary Inversion',
            description: 'Keeping standard subject-verb order after a negative adverb.',
            incorrectExample: 'Not only she finished the project, but she also reduced costs.',
            correctExample: 'Not only did she finish the project, but she also reduced costs.',
            explanation: 'Negative adverbs placed at the start of a sentence require question-like auxiliary inversion ("did she finish").'
          }
        ],
        sandboxChallenges: [
          {
            id: 'inv-1',
            prompt: 'Invert this sentence: "I have rarely heard such a beautiful voice."',
            targetAnswer: 'Rarely have I heard such a beautiful voice.',
            hint: 'Start with "Rarely" followed by the auxiliary verb "have" and subject "I".',
            type: 'transform'
          }
        ]
      }
    ]
  },

  // -------------------------------------------------------------
  // 4. PASSIVE VOICE & CAUSATIVES
  // -------------------------------------------------------------
  {
    id: 'passive-causatives',
    title: 'Passive Voice & Causatives',
    category: 'Precision & Objectivity',
    level: 'B2',
    description: 'Shifting focus to actions/objects, impersonal reporting passives, and causative structures.',
    subtypes: [
      {
        id: 'impersonal-passive',
        title: 'Impersonal & Reporting Passive',
        description: 'Expressing general belief, rumor, or formal distance.',
        formulas: [
          { label: 'It is + Past Participle + That', pattern: 'It is believed / reported / claimed that...', examples: ['It is believed that the market will recover soon.'] },
          { label: 'Subject + Passive Verb + Infinitive', pattern: 'He is said to be... / They are thought to have...', examples: ['The company is reported to have increased its revenue.'] }
        ],
        usageScenarios: [
          { context: 'Formal Reporting & Journalism', description: 'Maintaining objectivity in research or news.', register: 'Formal', example: 'It is widely understood that regulations will tighten.' }
        ],
        nativeTraps: [
          {
            title: 'Wrong Infinitive in Past Reporting',
            description: 'Using present infinitive instead of perfect infinitive when referring to a past event.',
            incorrectExample: 'He is alleged to commit the fraud last year.',
            correctExample: 'He is alleged to have committed the fraud last year.',
            explanation: 'When the reported event happened in the past relative to the present belief, use "to have + past participle".'
          }
        ],
        sandboxChallenges: [
          {
            id: 'pass-1',
            prompt: 'Convert to Impersonal Passive: "People believe that the CEO is resigning."',
            targetAnswer: 'It is believed that the CEO is resigning.',
            hint: 'Start with "It is believed that..."',
            type: 'transform'
          }
        ]
      },
      {
        id: 'causatives',
        title: 'Causative Structures',
        description: 'Expressing actions arranged, requested, or forced upon someone else.',
        formulas: [
          { label: 'Have Something Done', pattern: 'Have + Object + Past Participle', examples: ['We had our office renovated last month.'] },
          { label: 'Get Someone To Do', pattern: 'Get + Person + To + Base Verb', examples: ['I got the developer to fix the bug.'] }
        ],
        usageScenarios: [
          { context: 'Outsourcing & Delegating', description: 'Describing professional services arranged with third parties.', register: 'Workplace', example: 'We need to have the audit completed by Friday.' }
        ],
        nativeTraps: [
          {
            title: 'Confusing "Get someone to do" with "Have someone do"',
            description: 'Using "to" after "have someone do something".',
            incorrectExample: 'I had the assistant to print the report.',
            correctExample: 'I had the assistant print the report.',
            explanation: '"Have someone DO" takes a bare infinitive, whereas "Get someone TO DO" requires "to".'
          }
        ],
        sandboxChallenges: [
          {
            id: 'caus-1',
            prompt: 'Complete using Causative: "We arranged for a mechanic to inspect the car." -> "We had..."',
            targetAnswer: 'We had the car inspected.',
            hint: 'Use "have + object + past participle".',
            type: 'transform'
          }
        ]
      }
    ]
  },

  // -------------------------------------------------------------
  // 5. DISCOURSE MARKERS & LINKERS
  // -------------------------------------------------------------
  {
    id: 'discourse-linkers',
    title: 'Discourse Markers & Linkers',
    category: 'Flow & Natural Expression',
    level: 'C1',
    description: 'Connecting ideas with high-level contrast, concession, cause, and purpose markers.',
    subtypes: [
      {
        id: 'contrast-concession',
        title: 'Contrast & Concession',
        description: 'Using advanced connectors like Despite, In spite of, Although, Albeit, and Notwithstanding.',
        formulas: [
          { label: 'In Spite Of / Despite', pattern: 'Despite / In spite of + Noun / Gerund (-ing)', examples: ['Despite working hard, he missed the deadline.'] },
          { label: 'Although / Even though', pattern: 'Although + Subject + Verb', examples: ['Although it was raining, they went for a walk.'] },
          { label: 'Albeit', pattern: 'Adjective / Adverb + Albeit + Adjective', examples: ['It was an effective solution, albeit an expensive one.'] }
        ],
        usageScenarios: [
          { context: 'Argumentation & Debates', description: 'Balancing pros and cons in professional reports.', register: 'Workplace', example: 'Notwithstanding        the         initial budget deficit, the product launched on time.' }
        ],
        nativeTraps: [
          {
            title: 'Using "Despite of"',
            description: 'Mixing "despite" with "in spite of".',
            incorrectExample: 'Despite of the high price, we bought it.',
            correctExample: 'Despite the high price, we bought it.',
            explanation: '"Despite" never takes "of". Use either "despite" or "in spite of".'
          }
        ],
        sandboxChallenges: [
          {
            id: 'link-1',
            prompt: 'Rewrite using Despite: "Although she felt tired, she finished the report."',
            targetAnswer: 'Despite feeling tired, she finished the report.',
            hint: 'Replace "Although + Subject + Verb" with "Despite + Gerund (-ing)".',
            type: 'transform'
          }
        ]
      }
    ]
  }
];

5. State Management (src/store/useGrammarStore.ts)Implement a Zustand store managing:selectedDomainId: Defaults to 'conditionals'.selectedSubtypeId: Defaults to the first subtype of the active domain.activeTab: 'all' | 'blueprint' | 'usage' | 'traps' | 'sandbox'.Actions to update selection with automatic fallback logic (when switching domains, selectedSubtypeId auto-selects the first subtype of that domain).

6. Functional Component Specs
  A. ControlBar.tsxCascading drop-downs:Select 1: Grammar Domain (Conditionals, Reported Speech, etc.)Select 2: Specific Subtype (1st Conditional, Tense Backshifts, etc.)Select 3: View Filter / Focus Mode (All Panes, Formula Blueprint, Usage Context, Native Traps, Interactive Sandbox).Animate smooth transitions on state change.
  B. FormulaBlueprint.tsxRender structural formulas cleanly with high visual distinction.Highlight sentence components (e.g. [IF CLAUSE] vs [RESULT CLAUSE]) using color-coded badge tokens or decorated containers.
  C. UsageContextPane.tsxRender cards detailing practical real-life scenarios.Include register badges (Casual, Workplace, Formal) with distinct border/bg accents.
  D. NativeTrapsPane.tsxFocus on native-transfer errors (Polish $\rightarrow$ English edge cases).Use warning styling (border-amber-500/30 or similar accent contrast).Show clear side-by-side comparison: ❌ Incorrect vs. ✅ Correct with step-by-step reasoning.
  E. SandboxPane.tsxInteractive transformation slot where users type their answer.Instant feedback validation (case-insensitive string match / regex normalization).Trigger canvas-confetti explosion on correct answer submission.Hint toggle with step-by-step breakdown.
  
7. Deliverable ExpectationsProduce clean, fully typed TypeScript files without missing imports or placeholder code.Ensure all components export cleanly and render smoothly within App.tsx.
  ### ⚠️️ IMPORTANT: Extensibility & Dynamic Topic Support
The architecture MUST be fully data-driven so new grammar domains can be added seamlessly in the future without modifying UI components or store logic:
  1. **Dynamic Types**: Use open string types (e.g. `type GrammarDomainId = string`) or derive types directly from the dataset so adding new categories requires zero boilerplate refactoring.
  2. **Centralized Registry**: Store all domain data in a single array/map (`GRAMMAR_DOMAINS`). The `ControlBar` selectors, formula panes, traps, and sandbox exercises MUST dynamically map over this registry rather than using hardcoded conditional checks or fixed enum lists.
  3. **Pluggable Data Modules**: Structure `grammarData.ts` so future topic datasets (e.g., `passiveVoiceData.ts`, `modalVerbsData.ts`) can simply be imported and spread into the main `GRAMMAR_DOMAINS` array.

8. Remember about golden rules; Summarize: 
   1. **First rule**: Super modern, readable, bug-free code. Mobile-first, pixel-perfect, figma-style styling. Use latest and best practices, latest and best methods. 
   2. **Second rule**: Only correct, true and advanced rules for learning English.
# TASK SPECIFICATION: "Grammar Dramma" Dataset Expansion (prompt2.md)

You are an expert Cambridge/British Council certified English Language Pedagogist and Senior TypeScript Engineer. Your mission is to expand the interactive practice dataset in `src/data/grammarData.ts` for the **Grammar Dramma** application.

---

## 1. Context & Objective

Currently, each grammar subtype in `src/data/grammarData.ts` contains only **1** challenge in its `sandboxChallenges` array. 
The interactive `SandboxPane.tsx` component automatically renders all challenges present in this array without requiring any code modifications.

Your objective is to **expand every subtype's `sandboxChallenges` to have at least 4 high-quality challenges** (add exactly 3 new challenges per subtype, preserving the existing one as challenge #1).
With 9 subtypes across 5 domains, you will add **27 new challenges**, bringing the dataset to **36 comprehensive challenges** in total.

---

## 2. Pedagogical Standards (British Council / Cambridge C1 Standard)

Every challenge must adhere to these strict linguistic and pedagogical guidelines:

1. **Authentic, High-Utility English**:
   - Sentences must sound like natural, contemporary British/Universal English used in real life, professional meetings, polite social settings, or high-stakes exams (IELTS 7.0+, Cambridge C1 Advanced).
   - Avoid archaic, contrived, or robotic textbook sentences.
2. **Deterministic String Validation**:
   - The app validates answers using normalized string comparison:
     ```ts
     const normalize = (s: string) => s.trim().toLowerCase().replace(/\s+/g, ' ').replace(/['']/g, "'");
     ```
   - **CRITICAL**: The `prompt` must be crystal clear about the target sentence structure (e.g., using bracketed cues like `Complete with 2nd conditional: "If I (be) you..."`, or explicit rewrite starters like `Rewrite starting with "Under no circumstances..."`). This ensures the learner knows the intended phrasing without ambiguity.
3. **Punctuation & Capitalization**:
   - Standardize all `targetAnswer` strings to end with proper punctuation (full stop `.`).
4. **Pedagogical Hints**:
   - Every `hint` must provide actionable grammatical guidance (e.g., *"Shift 'will' to 'would' and change 'tomorrow' to 'the following day'"* or *"After 'Despite', use a gerund (-ing) or noun phrase, not a full subject + verb clause"*).

---

## 3. Exact Locations & Required Expansion Matrix

Target file: [`src/data/grammarData.ts`](file:///c:/kodilla/grammar-dramma-app/src/data/grammarData.ts)

### Domain 1: `conditionals` (Conditionals & Unreal Past)
- **Subtype 1: `zero-first-conditional`** (around line 53)
  - Keep `cond1-1`
  - Add `cond1-2` (Zero Conditional - scientific/general truth, e.g. ice/melting or workplace rules)
  - Add `cond1-3` (1st Conditional - professional warning or conditional offer with *unless* or *if*)
  - Add `cond1-4` (1st Conditional - real future scenario with *provided that* or *as long as* / standard *if*)
- **Subtype 2: `second-third-conditional`** (around line 102)
  - Keep `cond2-1`
  - Add `cond2-2` (2nd Conditional - hypothetical advice: *"If I were in your position, I would..."*)
  - Add `cond2-3` (2nd Conditional - imaginary present situation: salary/budget or remote work)
  - Add `cond2-4` (3rd Conditional - past hypothetical regret/post-mortem: flight/deadline/project)
- **Subtype 3: `mixed-conditionals`** (around line 145)
  - Keep `mixed-1`
  - Add `mixed-2` (Past action $\rightarrow$ Present consequence: *"If he had taken the earlier train, he would be at the conference now."*)
  - Add `mixed-3` (Present condition $\rightarrow$ Past result: *"If she spoke fluent German, she would have applied for the Berlin position."*)
  - Add `mixed-4` (Past action $\rightarrow$ Present consequence: qualification/learning choice $\rightarrow$ current ability)

---

### Domain 2: `reported-speech` (Reported Speech & Distance)
- **Subtype 1: `tense-backshifts`** (around line 206)
  - Keep `rep-1`
  - Add `rep-2` (Past Simple $\rightarrow$ Past Perfect: reporting completed actions)
  - Add `rep-3` (Modal shift: *can* $\rightarrow$ *could* or *will* $\rightarrow$ *would* with time marker shift: *next week* $\rightarrow$ *the following week*)
  - Add `rep-4` (Present Continuous $\rightarrow$ Past Continuous: *"We are negotiating a new deal," said the director.*)
- **Subtype 2: `indirect-questions`** (around line 249)
  - Keep `rep-q1`
  - Add `rep-q2` (Yes/No indirect question with *if/whether* + subject-verb order: *"Do you have the latest figures?" asked Sarah.*)
  - Add `rep-q3` (Wh- question reporting with *when/how much* without auxiliary inversion: *"How long did the meeting take?"*)
  - Add `rep-q4` (Polite business inquiry structure: *"Could you tell me what time the flight departs?"*)

---

### Domain 3: `inversion` (Inversion & Emphasis)
- **Subtype 1: `negative-adverbs`** (around line 310)
  - Keep `inv-1`
  - Add `inv-2` (Not only... but also with auxiliary inversion: *"She not only organized the event, but she also secured the sponsorship."*)
  - Add `inv-3` (Hardly / Scarcely + had + subject + past participle + when: arrival / event opening)
  - Add `inv-4` (Under no circumstances / At no time + modal/auxiliary inversion: security / workplace policy)

---

### Domain 4: `passive-causatives` (Passive Voice & Causatives)
- **Subtype 1: `impersonal-passive`** (around line 366)
  - Keep `pass-1`
  - Add `pass-2` (Subject + Passive Verb + Infinitive: *"People say that the company has revolutionized renewable energy."* $\rightarrow$ *"The company is said to have revolutionized renewable energy."*)
  - Add `pass-3` (It is reported / believed that: financial or public announcements)
  - Add `pass-4` (Subject + is thought / considered to be + adjective/noun phrase: leadership / innovation)
- **Subtype 2: `causatives`** (around line 409)
  - Keep `caus-1` (Note: User set this to: `"We had a mechanic inspect the car."`)
  - Add `caus-2` (Have something done - delegating service: contracts reviewed / documents translated)
  - Add `caus-3` (Get someone to do something - persuasion / arrangement with *to + infinitive*)
  - Add `caus-4` (Have someone do something - professional delegation with *bare infinitive*)

---

### Domain 5: `discourse-linkers` (Discourse Markers & Linkers)
- **Subtype 1: `contrast-concession`** (around line 470)
  - Keep `link-1`
  - Add `link-2` (In spite of + noun phrase / the fact that: bad weather / tight budget)
  - Add `link-3` (Rewrite using *Although* vs *Despite* with correct clause structure)
  - Add `link-4` (Using *Albeit* to join adjectives/adverbs succinctly: *"The presentation was comprehensive, albeit slightly long."*)

---

## 4. TypeScript Interface Reference

Each challenge item in `sandboxChallenges` must strictly adhere to the `SandboxChallenge` type in `src/types/grammar.ts`:

```typescript
export interface SandboxChallenge {
  id: string;             // Unique kebab-case ID (e.g., 'cond1-2', 'rep-3', 'inv-4')
  prompt: string;         // Clear question/transformation prompt with cues
  initialText?: string;   // Optional initial input text
  targetAnswer: string;   // Exact expected string (clean punctuation, correct capitalization)
  hint: string;           // Clear grammatical explanation of the required rule
  type: 'transform' | 'fill-gap';
}
```

---

## 5. Execution Instructions for Claude

1. Open `src/data/grammarData.ts`.
2. Locate each subtype's `sandboxChallenges` array.
3. Keep the existing first challenge intact in each subtype.
4. Append 3 new, linguistically rigorous challenges to each subtype (totaling 4 challenges per subtype).
5. Ensure valid TypeScript syntax with no trailing syntax errors or missing brackets.
6. Verify after editing that the project builds cleanly (`npx tsc --noEmit` or `npm run build`).

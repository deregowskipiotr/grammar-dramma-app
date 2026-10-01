import type { GrammarDomain } from '../types/grammar';

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
          {
            label: 'Zero Conditional',
            pattern: 'If + Present Simple, Present Simple',
            examples: ['If you heat water to 100°C, it boils.'],
          },
          {
            label: '1st Conditional',
            pattern: 'If + Present Simple, Will + Bare Infinitive',
            examples: ['If we send the email today, we will get a response tomorrow.'],
          },
        ],
        usageScenarios: [
          {
            context: 'Standard Rules',
            description: 'Stating facts or immediate consequences.',
            register: 'Universal',
            example: 'If you leave food out, it spoils.',
          },
          {
            context: 'Business Commitments',
            description: 'Promising future actions contingent on conditions.',
            register: 'Workplace',
            example: 'If we approve the contract, we will start next week.',
          },
        ],
        nativeTraps: [
          {
            title: 'Using "Will" inside the If-Clause',
            description: 'Directly translating future intent into the condition.',
            incorrectExample: 'If it will rain tomorrow, we will stay home.',
            correctExample: 'If it rains tomorrow, we will stay home.',
            explanation: 'The conditional clause requires Present Simple for future meaning.',
          },
        ],
        sandboxChallenges: [
          {
            id: 'cond1-1',
            prompt: 'Convert to 1st Conditional: "You (study) hard, you (pass) the exam."',
            targetAnswer: 'If you study hard, you will pass the exam.',
            hint: 'Use Present Simple in the if-clause and will + infinitive in the main clause.',
            type: 'transform',
          },
          {
            id: 'cond1-2',
            prompt: 'Write a Zero Conditional: "Water (freeze) if the temperature (drop) below 0°C."',
            targetAnswer: 'Water freezes if the temperature drops below 0°C.',
            hint: 'Zero Conditional states a scientific fact — use Present Simple in both clauses.',
            type: 'transform',
          },
          {
            id: 'cond1-3',
            prompt: 'Complete with 1st Conditional: "We (lose) the client unless we (respond) by tomorrow morning."',
            targetAnswer: 'We will lose the client unless we respond by tomorrow morning.',
            hint: 'Use "unless" as the negative condition — the if-clause still takes Present Simple, main clause takes will + infinitive.',
            type: 'transform',
          },
          {
            id: 'cond1-4',
            prompt: 'Rewrite as 1st Conditional: "You are welcome to join the project. The only condition: you meet the deadlines."',
            targetAnswer: 'If you meet the deadlines, you are welcome to join the project.',
            hint: 'Use Present Simple in the if-clause and Present Simple in the main clause for standing offers and conditions.',
            type: 'transform',
          },
        ],
      },
      {
        id: 'second-third-conditional',
        title: '2nd & 3rd Conditional',
        description: 'Unreal present situations and past hypothetical regrets.',
        formulas: [
          {
            label: '2nd Conditional',
            pattern: 'If + Past Simple, Would + Bare Infinitive',
            examples: ['If I had more time, I would learn Spanish.'],
          },
          {
            label: '3rd Conditional',
            pattern: 'If + Past Perfect, Would have + Past Participle',
            examples: ['If we had checked the schedule, we would not have missed the train.'],
          },
        ],
        usageScenarios: [
          {
            context: 'Hypothetical Advice',
            description: 'Giving advice using 2nd conditional.',
            register: 'Casual',
            example: 'If I were you, I would take the offer.',
          },
          {
            context: 'Project Post-Mortem',
            description: 'Analyzing past mistakes in business.',
            register: 'Workplace',
            example: 'If we had tested the feature, the bug would not have occurred.',
          },
        ],
        nativeTraps: [
          {
            title: 'Double "Would Have"',
            description: 'Putting "would have" in both clauses of a 3rd conditional.',
            incorrectExample: 'If I would have known, I would have called you.',
            correctExample: 'If I had known, I would have called you.',
            explanation: 'The condition clause MUST take Past Perfect ("had known"), not "would have".',
          },
        ],
        sandboxChallenges: [
          {
            id: 'cond2-1',
            prompt: 'Complete 3rd Conditional: "If they (prepare) the report, the client (approve) it."',
            targetAnswer: 'If they had prepared the report, the client would have approved it.',
            hint: 'Use Had + Past Participle in the if-clause and Would Have + Past Participle in the main clause.',
            type: 'transform',
          },
          {
            id: 'cond2-2',
            prompt: 'Give advice using 2nd Conditional: "I am in your position. I take the offer." → "If I..."',
            targetAnswer: 'If I were in your position, I would take the offer.',
            hint: 'Use "were" (not "was") for all subjects in 2nd Conditional if-clauses, and would + bare infinitive in the main clause.',
            type: 'transform',
          },
          {
            id: 'cond2-3',
            prompt: 'Complete with 2nd Conditional: "I (not / work) overtime every week if my salary (be) higher."',
            targetAnswer: 'I would not work overtime every week if my salary were higher.',
            hint: 'The 2nd Conditional describes an imaginary present reality — use Past Simple in the if-clause and would + infinitive in the main clause.',
            type: 'transform',
          },
          {
            id: 'cond2-4',
            prompt: 'Rewrite as 3rd Conditional: "We missed the deadline. The client cancelled the contract."',
            targetAnswer: 'If we had not missed the deadline, the client would not have cancelled the contract.',
            hint: 'Use Past Perfect in the if-clause (had + past participle) and would have + past participle in the main clause to describe a past event that did not happen.',
            type: 'transform',
          },
        ],
      },
      {
        id: 'mixed-conditionals',
        title: 'Mixed Conditionals',
        description: 'Connecting past actions to present effects, or ongoing conditions to past results.',
        formulas: [
          {
            label: 'Past Cause → Present Effect',
            pattern: 'If + Past Perfect, Would + Bare Infinitive',
            examples: ['If I had taken that job in London, I would live there now.'],
          },
          {
            label: 'Present Condition → Past Effect',
            pattern: 'If + Past Simple, Would have + Past Participle',
            examples: ['If she were more punctual, she would not have arrived late for the presentation.'],
          },
        ],
        usageScenarios: [
          {
            context: 'Life Reflections',
            description: 'Explaining how past choices shape your present state.',
            register: 'Casual',
            example: 'If I had saved money, I would be stress-free today.',
          },
          {
            context: 'Project Retrospectives',
            description: 'Explaining how past decisions impact current business operations.',
            register: 'Workplace',
            example: 'If we had invested in automated testing last quarter, our deployment pipeline would be much faster now.',
          },
        ],
        nativeTraps: [
          {
            title: 'Time Frame Mismatch',
            description: 'Failing to adjust the main clause verb when the effect is happening now.',
            incorrectExample: 'If I had slept better last night, I would have felt good now.',
            correctExample: 'If I had slept better last night, I would feel good now.',
            explanation: 'Use "would feel" because "now" indicates a present state resulting from a past event.',
          },
        ],
        sandboxChallenges: [
          {
            id: 'mixed-1',
            prompt: 'Combine: "I did not buy a ticket yesterday (past). I am not going to the event today (present)."',
            targetAnswer: 'If I had bought a ticket yesterday, I would go to the event today.',
            hint: 'Use Had + Past Participle in if-clause, Would + base verb in main clause.',
            type: 'transform',
          },
          {
            id: 'mixed-2',
            prompt: 'Combine into a Mixed Conditional: "He did not take the earlier train (past). He is not at the conference now (present)."',
            targetAnswer: 'If he had taken the earlier train, he would be at the conference now.',
            hint: 'Past action → Present consequence: use Past Perfect (had + past participle) in the if-clause and would + bare infinitive in the main clause.',
            type: 'transform',
          },
          {
            id: 'mixed-3',
            prompt: 'Combine into a Mixed Conditional: "She does not speak fluent German (present). She did not apply for the Berlin position (past)."',
            targetAnswer: 'If she spoke fluent German, she would have applied for the Berlin position.',
            hint: 'Present condition → Past result: use Past Simple in the if-clause and would have + past participle in the main clause.',
            type: 'transform',
          },
          {
            id: 'mixed-4',
            prompt: 'Combine into a Mixed Conditional: "I did not study medicine (past). I cannot treat patients today (present)."',
            targetAnswer: 'If I had studied medicine, I would be able to treat patients today.',
            hint: 'Past action → Present consequence: use Had + Past Participle in the if-clause and would + bare infinitive in the main clause. Use "would be able to" for present ability.',
            type: 'transform',
          },
        ],
      },
    ],
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
          {
            label: 'Present Simple → Past Simple',
            pattern: '"I work here" → He said he worked there',
            examples: ['Direct: "I need help." → Reported: She said she needed help.'],
          },
          {
            label: 'Present Perfect → Past Perfect',
            pattern: '"I have finished" → He said he had finished',
            examples: ['Direct: "We have sent the file." → Reported: They said they had sent the file.'],
          },
          {
            label: 'Will → Would',
            pattern: '"I will call" → He said he would call',
            examples: ['Direct: "I will update you." → Reported: He promised he would update me.'],
          },
        ],
        usageScenarios: [
          {
            context: 'Relaying Daily Updates',
            description: 'Sharing what a friend or colleague mentioned earlier in the day.',
            register: 'Casual',
            example: 'Sarah said she was running late because traffic was terrible.',
          },
          {
            context: 'Meeting Summaries',
            description: 'Relaying client feedback or colleague comments.',
            register: 'Workplace',
            example: 'The client stated that they were happy with the draft.',
          },
        ],
        nativeTraps: [
          {
            title: 'Forgetting Time/Place Marker Shifts',
            description: 'Keeping words like "tomorrow", "here", or "yesterday" unchanged in reported speech.',
            incorrectExample: 'He said he will come here tomorrow.',
            correctExample: 'He said he would come there the following day.',
            explanation: '"Tomorrow" becomes "the next day / following day", and "here" becomes "there".',
          },
        ],
        sandboxChallenges: [
          {
            id: 'rep-1',
            prompt: 'Report this statement: "I have already sent the invoice," said Mark.',
            targetAnswer: 'Mark said that he had already sent the invoice.',
            hint: 'Shift Present Perfect ("have sent") to Past Perfect ("had sent").',
            type: 'transform',
          },
          {
            id: 'rep-2',
            prompt: 'Report this statement: "The technician fixed the server," said the IT manager.',
            targetAnswer: 'The IT manager said that the technician had fixed the server.',
            hint: 'Shift Past Simple ("fixed") to Past Perfect ("had fixed") when reporting past statements.',
            type: 'transform',
          },
          {
            id: 'rep-3',
            prompt: 'Report this statement: "We will finalise the contract next week," said the director.',
            targetAnswer: 'The director said that they would finalise the contract the following week.',
            hint: 'Shift "will" to "would" and change the time marker: "next week" becomes "the following week".',
            type: 'transform',
          },
          {
            id: 'rep-4',
            prompt: 'Report this statement: "We are negotiating a new deal," said the director.',
            targetAnswer: 'The director said that they were negotiating a new deal.',
            hint: 'Shift Present Continuous ("are negotiating") to Past Continuous ("were negotiating").',
            type: 'transform',
          },
        ],
      },
      {
        id: 'indirect-questions',
        title: 'Indirect & Reported Questions',
        description: 'Reporting Wh- questions and Yes/No questions using correct word order.',
        formulas: [
          {
            label: 'Yes/No Questions',
            pattern: 'Ask + If / Whether + Subject + Verb',
            examples: ['Direct: "Are you ready?" → She asked if I was ready.'],
          },
          {
            label: 'Wh- Questions',
            pattern: 'Ask + Wh-word + Subject + Verb',
            examples: ['Direct: "Where do you live?" → He asked where I lived.'],
          },
        ],
        usageScenarios: [
          {
            context: 'Informal Inquiries',
            description: 'Asking friends or peers for information without being too direct.',
            register: 'Casual',
            example: 'Do you know if the coffee shop is open on Sundays?',
          },
          {
            context: 'Polite Inquiries',
            description: 'Formulating polite or business-appropriate questions.',
            register: 'Workplace',
            example: 'I was wondering if you could provide more details.',
          },
        ],
        nativeTraps: [
          {
            title: 'Inverted Question Word Order in Indirect Questions',
            description: 'Using auxiliary verb before subject in reported questions.',
            incorrectExample: 'She asked me where did I live.',
            correctExample: 'She asked me where I lived.',
            explanation: 'Reported questions take affirmative sentence word order (Subject + Verb), NOT question order.',
          },
        ],
        sandboxChallenges: [
          {
            id: 'rep-q1',
            prompt: 'Report this question: "Where is the manager?" asked John.',
            targetAnswer: 'John asked where the manager was.',
            hint: 'Use Wh-word + Subject + Verb order without auxiliary inversion.',
            type: 'transform',
          },
          {
            id: 'rep-q2',
            prompt: 'Report this Yes/No question: "Do you have the latest figures?" asked Sarah.',
            targetAnswer: 'Sarah asked if I had the latest figures.',
            hint: 'Yes/No reported questions use "if" or "whether", followed by subject + verb order (no auxiliary inversion). Shift Present Simple to Past Simple.',
            type: 'transform',
          },
          {
            id: 'rep-q3',
            prompt: 'Report this Wh- question: "How long did the meeting take?" she asked.',
            targetAnswer: 'She asked how long the meeting had taken.',
            hint: 'Use Wh-word + subject + verb in affirmative order (no inversion). Shift Past Simple to Past Perfect.',
            type: 'transform',
          },
          {
            id: 'rep-q4',
            prompt: 'Report this question: "When does the next flight to Warsaw depart?" he asked.',
            targetAnswer: 'He asked when the next flight to Warsaw departed.',
            hint: 'Use "when" + subject + verb (affirmative order). Shift Present Simple to Past Simple in the reported clause.',
            type: 'transform',
          },
        ],
      },
    ],
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
          {
            label: 'Hardly / Scarcely',
            pattern: 'Hardly + Had + Subject + Past Participle + When...',
            examples: ['Hardly had I entered the room when the phone rang.'],
          },
          {
            label: 'Not Only... But Also',
            pattern: 'Not only + Auxiliary + Subject + Verb...',
            examples: ['Not only did she pass the exam, but she also scored top marks.'],
          },
          {
            label: 'Seldom / Rarely',
            pattern: 'Seldom + Auxiliary + Subject + Verb',
            examples: ['Seldom have we witnessed such outstanding performance.'],
          },
        ],
        usageScenarios: [
          {
            context: 'Expressing Strong Disbelief or Surprise',
            description: 'Emphasizing an unusual event or strict rule in everyday conversations.',
            register: 'Casual',
            example: 'Never have I ever seen traffic this bad on a Friday afternoon.',
          },
          {
            context: 'Legal Directives & Academic Writing',
            description: 'Emphasizing strict regulations, fundamental principles, or solemn observations in official documents.',
            register: 'Formal',
            example: 'Under no circumstances should confidential patient records be disclosed without explicit authorization.',
          },
          {
            context: 'Executive Presentations & Reports',
            description: 'Emphasizing outstanding achievements or strict operational rules in business.',
            register: 'Workplace',
            example: 'Not only did we meet our sales target, but we also cut operating costs by 15%',
          },
        ],
        nativeTraps: [
          {
            title: 'Forgetting Auxiliary Inversion',
            description: 'Keeping standard subject-verb order after a negative adverb.',
            incorrectExample: 'Not only she finished the project, but she also reduced costs.',
            correctExample: 'Not only did she finish the project, but she also reduced costs.',
            explanation: 'Negative adverbs placed at the start of a sentence require question-like auxiliary inversion ("did she finish").',
          },
        ],
        sandboxChallenges: [
          {
            id: 'inv-1',
            prompt: 'Invert this sentence: "I have rarely heard such a beautiful voice."',
            targetAnswer: 'Rarely have I heard such a beautiful voice.',
            hint: 'Start with "Rarely" followed by the auxiliary verb "have" and subject "I".',
            type: 'transform',
          },
          {
            id: 'inv-2',
            prompt: 'Rewrite using "Not only... but also": "She organised the annual conference. She also secured three new sponsors."',
            targetAnswer: 'Not only did she organise the annual conference, but she also secured three new sponsors.',
            hint: 'After "Not only", invert the subject and auxiliary ("did she organise"). The second clause after "but" uses normal word order.',
            type: 'transform',
          },
          {
            id: 'inv-3',
            prompt: 'Rewrite using "Hardly": "I had sat down when the phone rang."',
            targetAnswer: 'Hardly had I sat down when the phone rang.',
            hint: 'After "Hardly", invert the auxiliary "had" and subject "I". The second clause with "when" keeps normal word order.',
            type: 'transform',
          },
          {
            id: 'inv-4',
            prompt: 'Rewrite starting with "Under no circumstances": "You should share your password with anyone." (negative instruction)',
            targetAnswer: 'Under no circumstances should you share your password with anyone.',
            hint: 'Negative adverbials like "Under no circumstances" require inversion of the modal and subject: "should you" not "you should".',
            type: 'transform',
          },
        ],
      },
    ],
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
          {
            label: 'It is + Past Participle + That',
            pattern: 'It is believed / reported / claimed that...',
            examples: ['It is believed that the market will recover soon.'],
          },
          {
            label: 'Subject + Passive Verb + Infinitive',
            pattern: 'He is said to be... / They are thought to have...',
            examples: ['The company is reported to have increased its revenue.'],
          },
        ],
        usageScenarios: [
          {
            context: 'Formal Reporting & Journalism',
            description: 'Maintaining objectivity in research or news.',
            register: 'Formal',
            example: 'It is widely understood that regulations will tighten.',
          },
          {
            context: 'Strategic Planning & Market Analysis',
            description: 'Discussing industry trends, market rumors, or general consensus without naming specific sources.',
            register: 'Workplace',
            example: 'The competitor is reported to be planning a major product launch next quarter.',
          },
        ],
        nativeTraps: [
          {
            title: 'Wrong Infinitive in Past Reporting',
            description: 'Using present infinitive instead of perfect infinitive when referring to a past event.',
            incorrectExample: 'He is alleged to commit the fraud last year.',
            correctExample: 'He is alleged to have committed the fraud last year.',
            explanation: 'When the reported event happened in the past relative to the present belief, use "to have + past participle".',
          },
        ],
        sandboxChallenges: [
          {
            id: 'pass-1',
            prompt: 'Convert to Impersonal Passive: "People believe that the CEO is resigning."',
            targetAnswer: 'It is believed that the CEO is resigning.',
            hint: 'Start with "It is believed that..."',
            type: 'transform',
          },
          {
            id: 'pass-2',
            prompt: 'Convert to Subject Passive: "People say that the company has revolutionised renewable energy."',
            targetAnswer: 'The company is said to have revolutionised renewable energy.',
            hint: 'When the event happened before the reporting verb, use "to have + past participle" (perfect infinitive): "is said to have revolutionised".',
            type: 'transform',
          },
          {
            id: 'pass-3',
            prompt: 'Convert to Impersonal Passive: "Experts report that the global economy is recovering faster than expected."',
            targetAnswer: 'It is reported that the global economy is recovering faster than expected.',
            hint: 'Replace the subject of the reporting clause with "It", then use the passive of the reporting verb: "It is reported that..."',
            type: 'transform',
          },
          {
            id: 'pass-4',
            prompt: 'Convert to Subject Passive: "People consider her to be one of the most effective leaders in the industry."',
            targetAnswer: 'She is considered to be one of the most effective leaders in the industry.',
            hint: 'Move the object of the reporting clause to the front and use the passive: "She is considered to be..." The infinitive after the passive verb stays as-is.',
            type: 'transform',
          },
        ],
      },
      {
        id: 'causatives',
        title: 'Causative Structures',
        description: 'Expressing actions arranged, requested, or forced upon someone else.',
        formulas: [
          {
            label: 'Have Something Done',
            pattern: 'Have + Object + Past Participle',
            examples: ['We had our office renovated last month.'],
          },
          {
            label: 'Get Someone To Do',
            pattern: 'Get + Person + To + Base Verb',
            examples: ['I got the developer to fix the bug.'],
          },
        ],
        usageScenarios: [
          {
            context: 'Personal Services & Everyday Chores',
            description: 'Talking about delegating home repairs, maintenance, or personal tasks.',
            register: 'Casual',
            example: 'I need to get someone to take a look at my washing machine this weekend.',
          },
          {
            context: 'Outsourcing & Delegating',
            description: 'Describing professional services arranged with third parties.',
            register: 'Workplace',
            example: 'We need to have the audit completed by Friday.',
          },
        ],
        nativeTraps: [
          {
            title: 'Confusing "Get someone to do" with "Have someone do"',
            description: 'Using "to" after "have someone do something".',
            incorrectExample: 'I had the assistant to print the report.',
            correctExample: 'I had the assistant print the report.',
            explanation: '"Have someone DO" takes a bare infinitive, whereas "Get someone TO DO" requires "to".',
          },
        ],
        sandboxChallenges: [
          {
            id: 'caus-1',
            prompt: 'Complete using Causative: "We arranged for a mechanic to inspect the car." → "We had..."',
            targetAnswer: 'We had a mechanic inspect the car.',
            hint: 'Use "have + person + bare infinitive" when someone performs the action for you.',
            type: 'transform',
          },
          {
            id: 'caus-2',
            prompt: 'Rewrite using "have something done": "A lawyer reviewed our contracts before we signed them."',
            targetAnswer: 'We had our contracts reviewed by a lawyer before we signed them.',
            hint: 'Use "have + object + past participle" to describe a service arranged for you: "have our contracts reviewed".',
            type: 'transform',
          },
          {
            id: 'caus-3',
            prompt: 'Rewrite using "get someone to do": "A courier delivered the parcel to the client." → "We got..."',
            targetAnswer: 'We got a courier to deliver the parcel to the client.',
            hint: 'Use "get + person + to + bare infinitive". Unlike "have", "get" always requires "to" before the verb.',
            type: 'transform',
          },
          {
            id: 'caus-4',
            prompt: 'Rewrite using "have someone do": "A graphic designer redesigned our company logo." → "We had..."',
            targetAnswer: 'We had a graphic designer redesign our company logo.',
            hint: 'Use "have + person + bare infinitive" (no "to"): "had a graphic designer redesign", not "had a graphic designer to redesign".',
            type: 'transform',
          },
        ],
      },
    ],
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
          {
            label: 'In Spite Of / Despite',
            pattern: 'Despite / In spite of + Noun / Gerund (-ing)',
            examples: ['Despite working hard, he missed the deadline.'],
          },
          {
            label: 'Although / Even though',
            pattern: 'Although + Subject + Verb',
            examples: ['Although it was raining, they went for a walk.'],
          },
          {
            label: 'Albeit',
            pattern: 'Adjective / Adverb + Albeit + Adjective',
            examples: ['It was an effective solution, albeit an expensive one.'],
          },
        ],
        usageScenarios: [
          {
            context: 'Everyday Conversations & Storytelling',
            description: 'Expressing contrast or unexpected outcomes when sharing personal experiences.',
            register: 'Casual',
            example: 'Despite the terrible weather, we had a fantastic time at the outdoor concert.',
          },
          {
            context: 'Argumentation & Debates',
            description: 'Balancing pros and cons in professional reports.',
            register: 'Workplace',
            example: 'Notwithstanding the initial budget deficit, the product launched on time.',
          },
        ],
        nativeTraps: [
          {
            title: 'Using "Despite of"',
            description: 'Mixing "despite" with "in spite of".',
            incorrectExample: 'Despite of the high price, we bought it.',
            correctExample: 'Despite the high price, we bought it.',
            explanation: '"Despite" never takes "of". Use either "despite" or "in spite of".',
          },
        ],
        sandboxChallenges: [
          {
            id: 'link-1',
            prompt: 'Rewrite using Despite: "Although she felt tired, she finished the report."',
            targetAnswer: 'Despite feeling tired, she finished the report.',
            hint: 'Replace "Although + Subject + Verb" with "Despite + Gerund (-ing)".',
            type: 'transform',
          },
          {
            id: 'link-2',
            prompt: 'Rewrite using "In spite of": "Although the budget was extremely tight, the team delivered a high-quality product."',
            targetAnswer: 'In spite of the extremely tight budget, the team delivered a high-quality product.',
            hint: 'After "In spite of", use a noun phrase (not a full clause). Convert the verb phrase into a noun phrase: "the extremely tight budget".',
            type: 'transform',
          },
          {
            id: 'link-3',
            prompt: 'Rewrite using "Although": "Despite receiving critical feedback, he continued with the original plan."',
            targetAnswer: 'Although he received critical feedback, he continued with the original plan.',
            hint: 'Replace "Despite + Gerund" with "Although + Subject + Verb". Restore the full clause structure after "Although".',
            type: 'transform',
          },
          {
            id: 'link-4',
            prompt: 'Join these two ideas using "albeit": "The solution was effective. However, it was quite costly."',
            targetAnswer: 'The solution was effective, albeit quite costly.',
            hint: '"Albeit" connects two adjectives or adjectival phrases within a single sentence. It means "although" and is followed directly by an adjective or short phrase, not a full clause.',
            type: 'transform',
          },
        ],
      },
    ],
  },
];

// ============================================================
// FILE: server/seed/seedData.js
// Run with: npm run seed (or: node seed/seedData.js)
// ============================================================
require('dotenv').config();
const mongoose = require('mongoose');
const Vocabulary = require('../models/Vocabulary');
const Lesson = require('../models/Lesson');
const Exercise = require('../models/Exercise');
const hsk1Vocab = require('./data/hsk1Vocab');
const hsk1Lessons = require('./data/hsk1Lessons');

const MONGODB_URI = process.env.MONGODB_URI;

// ==========================================
// HSK1 VOCABULARY WORDS (150 items from data/hsk1Vocab)
// ==========================================
const vocabData = hsk1Vocab;

// ==========================================
// HSK1 LESSONS (15 lessons)
// ==========================================
const lessonData = hsk1Lessons;

  {
    title: 'Greetings & Self-Introduction',
    titleChinese: '第一课：你好',
    description: 'Learn basic greetings and how to introduce yourself in Chinese.',
    hskLevel: 'HSK1',
    order: 1,
    category: 'conversation',
    estimatedMinutes: 10,
    xpReward: 15,
    content: {
      introduction: 'In this lesson, you will learn the most essential Chinese '
        + 'greetings. These phrases are used every day in China and are the '
        + 'foundation of all Chinese communication.',
      keyPoints: [
        '你好 (nǐ hǎo) is the universal greeting',
        '谢谢 (xiè xie) shows gratitude',
        '再见 (zài jiàn) literally means "again see" — see you again',
      ],
      dialogues: [
        {
          speaker: 'Xiǎo Míng',
          chinese: '你好！我叫小明。',
          pinyin: 'Nǐ hǎo! Wǒ jiào Xiǎo Míng.',
          english: 'Hello! My name is Xiao Ming.',
        },
        {
          speaker: 'Lì Li',
          chinese: '你好，小明！我叫丽丽。',
          pinyin: 'Nǐ hǎo, Xiǎo Míng! Wǒ jiào Lì Li.',
          english: 'Hello, Xiao Ming! My name is Li Li.',
        },
        {
          speaker: 'Xiǎo Míng',
          chinese: '很高兴认识你！',
          pinyin: 'Hěn gāoxìng rènshi nǐ!',
          english: 'Nice to meet you!',
        },
        {
          speaker: 'Lì Li',
          chinese: '我也很高兴。再见！',
          pinyin: 'Wǒ yě hěn gāoxìng. Zàijiàn!',
          english: 'Me too. Goodbye!',
        },
      ],
      culturalNote: 'In Chinese culture, people often greet each other by '
        + 'asking "你吃了吗？" (Have you eaten?) as a friendly greeting, '
        + 'similar to "How are you?" in English.',
    },
    // vocabIds will be filled after vocab is created
  },
  {
    title: 'People & Pronouns',
    titleChinese: '第二课：我、你、他',
    description: 'Learn pronouns and words for people around you.',
    hskLevel: 'HSK1',
    order: 2,
    category: 'vocabulary',
    estimatedMinutes: 12,
    xpReward: 15,
    content: {
      introduction: 'Pronouns are the building blocks of Chinese sentences. '
        + 'Unlike English, Chinese pronouns do not change form — 我 is always '
        + '我 whether it\'s the subject or object.',
      keyPoints: [
        '我 (wǒ) = I/me, 你 (nǐ) = you, 他/她 (tā) = he/she',
        '是 (shì) connects subject to description: 我是学生',
        'Add 们 (men) to make plurals: 我们 = we, 你们 = you all',
      ],
      dialogues: [
        {
          speaker: 'Teacher',
          chinese: '你是学生吗？',
          pinyin: 'Nǐ shì xuéshēng ma?',
          english: 'Are you a student?',
        },
        {
          speaker: 'Student',
          chinese: '是的，我是学生。',
          pinyin: 'Shì de, wǒ shì xuéshēng.',
          english: 'Yes, I am a student.',
        },
        {
          speaker: 'Teacher',
          chinese: '他也是学生吗？',
          pinyin: 'Tā yě shì xuéshēng ma?',
          english: 'Is he also a student?',
        },
        {
          speaker: 'Student',
          chinese: '不是，他是老师。',
          pinyin: 'Bú shì, tā shì lǎoshī.',
          english: 'No, he is a teacher.',
        },
      ],
    },
  },
];

// ==========================================
// 5 SAMPLE EXERCISES (for Lesson 1)
// ==========================================
const exerciseData = [
  {
    type: 'multiple_choice',
    difficulty: 'easy',
    question: {
      text: 'What does 你好 mean?',
      chinese: '你好',
      pinyin: 'nǐ hǎo',
    },
    options: [
      { text: 'Hello', isCorrect: true },
      { text: 'Goodbye', isCorrect: false },
      { text: 'Thank you', isCorrect: false },
      { text: 'Sorry', isCorrect: false },
    ],
    explanation: '你好 (nǐ hǎo) is the most common way to say "Hello" in Chinese.',
    xpReward: 5,
    order: 1,
  },
  {
    type: 'multiple_choice',
    difficulty: 'easy',
    question: {
      text: 'How do you say "Thank you" in Chinese?',
    },
    options: [
      { text: '再见', isCorrect: false },
      { text: '谢谢', isCorrect: true },
      { text: '你好', isCorrect: false },
      { text: '对不起', isCorrect: false },
    ],
    explanation: '谢谢 (xiè xie) means "Thank you".',
    xpReward: 5,
    order: 2,
  },
  {
    type: 'fill_blank',
    difficulty: 'medium',
    question: {
      text: 'Complete: 我叫 _____。(My name is Xiao Ming)',
      chinese: '我叫_____。',
    },
    correctAnswer: '小明',
    acceptableAnswers: ['小明', 'Xiao Ming', 'xiao ming'],
    explanation: '叫 (jiào) means "to be called". 我叫小明 = My name is Xiao Ming.',
    xpReward: 8,
    order: 3,
  },
  {
    type: 'tone_selection',
    difficulty: 'medium',
    question: {
      text: 'Select the correct pinyin for 再见:',
      chinese: '再见',
    },
    options: [
      { text: 'zài jiàn', isCorrect: true },
      { text: 'zái jiān', isCorrect: false },
      { text: 'zǎi jiǎn', isCorrect: false },
      { text: 'zāi jiān', isCorrect: false },
    ],
    explanation: '再见 has tones: 再 (zài, 4th tone) + 见 (jiàn, 4th tone).',
    xpReward: 8,
    order: 4,
  },
  {
    type: 'matching',
    difficulty: 'easy',
    question: {
      text: 'Match the Chinese with their English meanings:',
    },
    matchPairs: [
      { left: '你好', right: 'Hello' },
      { left: '谢谢', right: 'Thank you' },
      { left: '再见', right: 'Goodbye' },
    ],
    explanation: 'These are the three most essential greetings in Chinese.',
    xpReward: 10,
    order: 5,
  },
];


// ==========================================
// SEED FUNCTION
// ==========================================
async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Promise.all([
      Vocabulary.deleteMany({}),
      Lesson.deleteMany({}),
      Exercise.deleteMany({}),
    ]);
    console.log('Cleared existing data');

    // 1) Create vocabulary
    const createdVocab = await Vocabulary.insertMany(vocabData);
    console.log(`Created ${createdVocab.length} vocabulary items`);

    // Map vocab by hanzi for linking
    const vocabMap = {};
    createdVocab.forEach((v) => { vocabMap[v.hanzi] = v._id; });

    // 2) Create lessons with linked vocab
    const lesson1Vocab = ['你好', '谢谢', '再见'].map((h) => vocabMap[h]);
    const lesson2Vocab = ['我', '你', '是', '学生', '老师', '朋友']
      .map((h) => vocabMap[h]);

    lessonData[0].vocabularyIds = lesson1Vocab;
    lessonData[1].vocabularyIds = lesson2Vocab;

    const createdLessons = await Lesson.insertMany(lessonData);
    console.log(`Created ${createdLessons.length} lessons`);

    // 3) Create exercises linked to lesson 1
    const lesson1Id = createdLessons[0]._id;
    const exercisesWithLesson = exerciseData.map((e) => ({
      ...e,
      lessonId: lesson1Id,
    }));

    const createdExercises = await Exercise.insertMany(exercisesWithLesson);
    console.log(`Created ${createdExercises.length} exercises`);

    // 4) Link exercise IDs back to lesson
    await Lesson.findByIdAndUpdate(lesson1Id, {
      exerciseIds: createdExercises.map((e) => e._id),
    });

    console.log('\n✅ Seed completed successfully!');
    console.log('Summary:');
    console.log(`  - ${createdVocab.length} vocabulary words`);
    console.log(`  - ${createdLessons.length} lessons`);
    console.log(`  - ${createdExercises.length} exercises`);

    process.exit(0);
  } catch (err) {
    console.error('Seed error:', err);
    process.exit(1);
  }
}

seed();
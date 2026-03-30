// ============================================================
// FILE: server/models/Exercise.js
// ============================================================
const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  lessonId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lesson',
    required: true,
  },
  type: {
    type: String,
    enum: [
      'multiple_choice',     // Choose correct translation
      'fill_blank',          // Fill in the blank
      'listening',           // Listen and choose
      'matching',            // Match pairs
      'reorder',            // Reorder words to form sentence
      'character_writing',   // Write the character
      'tone_selection',      // Select correct tone
      'translate',           // Type the translation
    ],
    required: true,
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    default: 'easy',
  },
  question: {
    text: String,           // "What does 你好 mean?"
    chinese: String,        // 你好
    pinyin: String,         // nǐ hǎo
    audioUrl: String,       // for listening exercises
    imageUrl: String,       // for visual exercises
  },
  // For multiple_choice and listening
  options: [{
    text: String,
    isCorrect: { type: Boolean, default: false },
  }],
  // For fill_blank
  correctAnswer: String,
  acceptableAnswers: [String],  // alternate correct answers
  // For matching exercises
  matchPairs: [{
    left: String,           // Chinese
    right: String,          // English/Pinyin
  }],
  // For reorder exercises
  correctOrder: [String],   // words in correct order
  scrambledWords: [String], // words in scrambled order
  // Metadata
  explanation: String,      // shown after answering
  xp: { type: Number, default: 10 },
  order: Number,            // order within lesson
}, {
  timestamps: true,
});

exerciseSchema.index({ lessonId: 1, order: 1 });

module.exports = mongoose.model('Exercise', exerciseSchema);
// ============================================================
// FILE: server/models/Result.js
// ============================================================
const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  lessonId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lesson',
    required: true,
  },
  // Per-exercise results
  answers: [{
    exerciseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' },
    userAnswer: String,
    isCorrect: Boolean,
    timeSpent: Number,      // seconds spent on this question
  }],
  // Summary
  totalQuestions: Number,
  correctAnswers: Number,
  score: {                  // percentage 0-100
    type: Number,
    required: true,
  },
  xpEarned: { type: Number, default: 0 },
  timeSpentTotal: Number,   // total seconds
  isPassed: {               // score >= 70
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

resultSchema.index({ userId: 1, lessonId: 1 });
resultSchema.index({ userId: 1, createdAt: -1 });

module.exports = mongoose.model('Result', resultSchema);
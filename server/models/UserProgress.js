const mongoose = require('mongoose');

const userProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

  vocabId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vocabulary' },

  level: { type: Number, default: 1 }, // spaced repetition level
  correctCount: { type: Number, default: 0 },
  wrongCount: { type: Number, default: 0 },

  nextReview: { type: Date },

  lastReviewed: Date,
}, { timestamps: true });

module.exports = mongoose.model('UserProgress', userProgressSchema);
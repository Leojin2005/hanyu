// ============================================================
// FILE: server/models/Favorite.js
// ============================================================
const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  vocabularyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vocabulary',
    required: true,
  },
  // Spaced repetition data
  reviewCount: { type: Number, default: 0 },
  nextReviewDate: { type: Date, default: Date.now },
  ease: { type: Number, default: 2.5 },   // SM-2 ease factor
  interval: { type: Number, default: 1 },  // days until next review
  note: String,             // user's personal note
}, {
  timestamps: true,
});

// Each user can favorite a vocab only once
favoriteSchema.index({ userId: 1, vocabularyId: 1 }, { unique: true });

module.exports = mongoose.model('Favorite', favoriteSchema);
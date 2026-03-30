// ============================================================
// FILE: server/models/Vocabulary.js
// ============================================================
const mongoose = require('mongoose');

const vocabularySchema = new mongoose.Schema({
  hanzi: String,
  pinyin: String,
  meaning: String,
  meaningVi: String,

  hskLevel: String,
  partOfSpeech: String,

  // NEW
  difficulty: { type: Number, default: 1 }, // 1-5
  frequency: Number,
  tags: [String],

  examples: [
    {
      chinese: String,
      pinyin: String,
      english: String,
    }
  ],

  // tracking học
  isLearned: { type: Boolean, default: false },
  reviewCount: { type: Number, default: 0 },
}, { timestamps: true });

vocabularySchema.index({ hskLevel: 1 });
vocabularySchema.index({ hanzi: 'text', pinyin: 'text', meaning: 'text' });

module.exports = mongoose.model('Vocabulary', vocabularySchema);
// ============================================================
// FILE: server/models/Lesson.js
// ============================================================
const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  title: String,
  description: String,
  hskLevel: String,
  order: Number,

  vocabularyIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vocabulary' }],
  exerciseIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' }],

  // NEW
  xpReward: { type: Number, default: 50 },
  isLocked: { type: Boolean, default: false },
  isPublished: { type: Boolean, default: true },
});

// Index for efficient queries
lessonSchema.index({ hskLevel: 1, order: 1 });

module.exports = mongoose.model('Lesson', lessonSchema);
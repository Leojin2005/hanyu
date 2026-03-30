// ============================================================
// FILE: server/controllers/vocabController.js
// ============================================================
const Vocabulary = require('../models/Vocabulary');
const Favorite = require('../models/Favorite');

const getVocabulary = async (req, res) => {
  try {
    const { level, page = 1, limit = 1000, sort = 'frequency' } = req.query;
    const filter = {};
    if (level) filter.hskLevel = level;

    const vocab = await Vocabulary.find(filter)
      .sort({ [sort]: 1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Vocabulary.countDocuments(filter);

    res.json({
      vocabulary: vocab,
      pagination: { page: Number(page), limit: Number(limit), total },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const searchVocabulary = async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) return res.json({ results: [] });

    const results = await Vocabulary.find({
      $or: [
        { hanzi: { $regex: q, $options: 'i' } },
        { pinyin: { $regex: q, $options: 'i' } },
        { meaning: { $regex: q, $options: 'i' } },
      ],
    }).limit(20);

    res.json({ results });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const toggleFavorite = async (req, res) => {
  try {
    const { vocabularyId } = req.body;
    const userId = req.user._id;

    const existing = await Favorite.findOne({ userId, vocabularyId });

    if (existing) {
      await existing.deleteOne();
      return res.json({ action: 'removed', vocabularyId });
    }

    const fav = await Favorite.create({ userId, vocabularyId });
    res.status(201).json({ action: 'added', favorite: fav });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find({ userId: req.user._id })
      .populate('vocabularyId')
      .sort({ createdAt: -1 });
    res.json(favorites);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getVocabulary, searchVocabulary, toggleFavorite, getFavorites };
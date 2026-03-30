// ============================================================
// FILE: server/routes/vocabRoutes.js
// ============================================================
const router = require('express').Router();
const { protect } = require('../middleware/authMiddleware');
const {
  getVocabulary, searchVocabulary, toggleFavorite, getFavorites,
} = require('../controllers/vocabController');

router.get('/', protect, getVocabulary);
router.get('/search', protect, searchVocabulary);
router.post('/favorite', protect, toggleFavorite);
router.get('/favorites', protect, getFavorites);

module.exports = router;
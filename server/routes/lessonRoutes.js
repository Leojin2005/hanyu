// ============================================================
// FILE: server/routes/lessonRoutes.js
// ============================================================
const router = require('express').Router();
const { protect } = require('../middleware/authMiddleware');
const {
  getLessons, getLessonById,
} = require('../controllers/lessonController');

router.get('/', protect, getLessons);
router.get('/:id', protect, getLessonById);

module.exports = router;
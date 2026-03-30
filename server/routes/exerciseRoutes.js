// ============================================================
// FILE: server/routes/exerciseRoutes.js
// ============================================================
const router = require('express').Router();
const { protect } = require('../middleware/authMiddleware');
const {
  getExercises, submitExercise,
} = require('../controllers/exerciseController');

router.get('/:lessonId', protect, getExercises);
router.post('/submit', protect, submitExercise);

module.exports = router;
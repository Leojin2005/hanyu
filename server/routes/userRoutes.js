// ============================================================
// FILE: server/routes/userRoutes.js
// ============================================================
const router = require('express').Router();
const { protect } = require('../middleware/authMiddleware');
const {
  getProfile, updateProfile, getProgress,
} = require('../controllers/userController');

router.get('/profile', protect, getProfile);
router.put('/update', protect, updateProfile);
router.get('/progress', protect, getProgress);

module.exports = router;
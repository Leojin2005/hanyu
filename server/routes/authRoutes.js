// ============================================================
// FILE: server/routes/authRoutes.js
// ============================================================
const router = require('express').Router();
const {
  register, login, refreshToken, logout,
} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.post('/refresh', refreshToken);
router.post('/logout', protect, logout);

module.exports = router;
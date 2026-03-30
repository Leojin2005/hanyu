// ============================================================
// FILE: server/routes/leaderboardRoutes.js
// ============================================================
const router = require('express').Router();
const { protect } = require('../middleware/authMiddleware');
const { getLeaderboard } = require('../controllers/leaderboardController');

router.get('/', protect, getLeaderboard);

module.exports = router;
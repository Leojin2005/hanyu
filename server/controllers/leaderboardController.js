// ============================================================
// FILE: server/controllers/leaderboardController.js
// ============================================================
const User = require('../models/User');

const getLeaderboard = async (req, res) => {
  try {
    const { type = 'xp', limit = 20 } = req.query;

    let sortField = {};
    if (type === 'xp') sortField = { xp: -1 };
    else if (type === 'streak') sortField = { streak: -1 };

    const users = await User.find({ role: 'user' })
      .select('username avatar xp level streak currentLevel')
      .sort(sortField)
      .limit(Number(limit));

    // Find current user's rank
    const currentUser = req.user;
    const userRank = await User.countDocuments({
      role: 'user',
      [type === 'xp' ? 'xp' : 'streak']: { $gt: currentUser[type === 'xp' ? 'xp' : 'streak'] },
    }) + 1;

    res.json({
      leaderboard: users,
      currentUserRank: userRank,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getLeaderboard };
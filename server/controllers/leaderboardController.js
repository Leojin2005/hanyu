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

    // Calculate ranking for returned users
    const rankedUsers = users.map((u, index) => ({
      ...u.toObject(),
      rank: index + 1,
    }));

    // Find current user's rank (tie-safe with _id as stable tiebreaker)
    const currentUser = req.user;
    const userValue = currentUser[type === 'xp' ? 'xp' : 'streak'];
    const valueField = type === 'xp' ? 'xp' : 'streak';
    const userRank = await User.countDocuments({
      role: 'user',
      $or: [
        { [valueField]: { $gt: userValue } },
        { [valueField]: userValue, _id: { $lt: currentUser._id } },
      ],
    }) + 1;

    res.json({
      leaderboard: rankedUsers,
      currentUserRank: userRank,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getLeaderboard };
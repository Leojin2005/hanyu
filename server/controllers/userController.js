// ============================================================
// FILE: server/controllers/userController.js
// ============================================================
const User = require('../models/User');
const Result = require('../models/Result');

const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .populate('completedLessons.lesson', 'title hskLevel');
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateProfile = async (req, res) => {
  try {
    const allowed = ['username', 'avatar', 'currentLevel', 'dailyGoal',
                     'soundEnabled', 'darkMode'];
    const updates = {};
    for (const key of allowed) {
      if (req.body[key] !== undefined) updates[key] = req.body[key];
    }

    const user = await User.findByIdAndUpdate(req.user._id, updates, {
      new: true, runValidators: true,
    });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getProgress = async (req, res) => {
  try {
    const user = req.user;
    const results = await Result.find({ userId: user._id })
      .sort({ createdAt: -1 })
      .limit(30)
      .populate('lessonId', 'title hskLevel');

    // Aggregate stats per HSK level
    const levelStats = await Result.aggregate([
      { $match: { userId: user._id, isPassed: true } },
      { $lookup: {
        from: 'lessons', localField: 'lessonId',
        foreignField: '_id', as: 'lesson',
      }},
      { $unwind: '$lesson' },
      { $group: {
        _id: '$lesson.hskLevel',
        completed: { $addToSet: '$lessonId' },
        avgScore: { $avg: '$score' },
      }},
      { $project: {
        level: '$_id',
        completedCount: { $size: '$completed' },
        avgScore: { $round: ['$avgScore', 1] },
      }},
    ]);

    res.json({
      xp: user.xp,
      level: user.calculateLevel(),
      streak: user.streak,
      longestStreak: user.longestStreak,
      currentLevel: user.currentLevel,
      recentResults: results,
      levelStats,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getProfile, updateProfile, getProgress };
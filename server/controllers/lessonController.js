// ============================================================
// FILE: server/controllers/lessonController.js
// ============================================================
const Lesson = require('../models/Lesson');

const getLessons = async (req, res) => {
  try {
    const { level, category, page = 1, limit = 20 } = req.query;
    const filter = { isPublished: true };

    if (level) filter.hskLevel = level;
    if (category) filter.category = category;

    const lessons = await Lesson.find(filter)
      .sort({ order: 1 })
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .select('-content'); // exclude heavy content in list

    const total = await Lesson.countDocuments(filter);

    // Attach completion status for current user
    const user = req.user;
    const completedIds = new Set(
      user.completedLessons.map((cl) => cl.lesson.toString())
    );

    const lessonsWithStatus = lessons.map((lesson) => ({
      ...lesson.toObject(),
      isCompleted: completedIds.has(lesson._id.toString()),
    }));

    res.json({
      lessons: lessonsWithStatus,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getLessonById = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id)
      .populate('vocabularyIds')
      .populate('exerciseIds');

    if (!lesson) {
      return res.status(404).json({ error: 'Lesson not found' });
    }

    res.json(lesson);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getLessons, getLessonById };
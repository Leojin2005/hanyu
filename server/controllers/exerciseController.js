// ============================================================
// FILE: server/controllers/exerciseController.js
// ============================================================
const Exercise = require('../models/Exercise');
const Result = require('../models/Result');
const User = require('../models/User');
const Lesson = require('../models/Lesson');

const getExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find({ lessonId: req.params.lessonId })
      .sort({ order: 1 });
    res.json(exercises);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /api/exercises/submit
// Body: { lessonId, answers: [{ exerciseId, userAnswer, timeSpent }] }
const submitExercise = async (req, res) => {
  try {
    const { lessonId, answers } = req.body;
    const userId = req.user._id;

    // Fetch all exercises for this lesson
    const exercises = await Exercise.find({ lessonId });
    const exerciseMap = new Map(
      exercises.map((e) => [e._id.toString(), e])
    );

    // Grade each answer
    let correctCount = 0;
    const gradedAnswers = answers.map((ans) => {
      const exercise = exerciseMap.get(ans.exerciseId);
      if (!exercise) return { ...ans, isCorrect: false };

      let isCorrect = false;
      switch (exercise.type) {
        case 'multiple_choice':
        case 'listening':
        case 'tone_selection': {
          const correctOption = exercise.options.find((o) => o.isCorrect);
          isCorrect = correctOption && ans.userAnswer === correctOption.text;
          break;
        }
        case 'fill_blank':
        case 'translate': {
          const validAnswers = [
            exercise.correctAnswer,
            ...exercise.acceptableAnswers,
          ].map((a) => a?.toLowerCase().trim());
          isCorrect = validAnswers.includes(ans.userAnswer?.toLowerCase().trim());
          break;
        }
        case 'reorder': {
          isCorrect = ans.userAnswer === exercise.correctOrder.join(' ');
          break;
        }
        default:
          isCorrect = ans.userAnswer === exercise.correctAnswer;
      }

      if (isCorrect) correctCount++;
      return { ...ans, isCorrect };
    });

    const totalQuestions = exercises.length;
    const score = Math.round((correctCount / totalQuestions) * 100);
    const isPassed = score >= 70;

    // Calculate XP earned
    const lesson = await Lesson.findById(lessonId);
    let xpEarned = 0;
    if (isPassed) {
      xpEarned = lesson?.xpReward || 15;
      // Bonus for perfect score
      if (score === 100) xpEarned = Math.round(xpEarned * 1.5);
    } else {
      xpEarned = Math.round((score / 100) * 5); // partial XP
    }

    // Save result
    const result = await Result.create({
      userId,
      lessonId,
      answers: gradedAnswers,
      totalQuestions,
      correctAnswers: correctCount,
      score,
      xpEarned,
      timeSpentTotal: answers.reduce((sum, a) => sum + (a.timeSpent || 0), 0),
      isPassed,
    });

    // Update user XP, streak, completed lessons
    const user = await User.findById(userId);
    user.xp += xpEarned;
    user.level = user.calculateLevel();
    user.updateStreak();

    if (isPassed) {
      const alreadyCompleted = user.completedLessons.some(
        (cl) => cl.lesson.toString() === lessonId
      );
      if (!alreadyCompleted) {
        user.completedLessons.push({ lesson: lessonId, score });
      }
    }

    // Check for badge achievements
    const newBadges = checkBadges(user);
    if (newBadges.length > 0) {
      user.badges.push(...newBadges);
    }

    await user.save();

    res.json({
      result,
      xpEarned,
      newXpTotal: user.xp,
      newLevel: user.level,
      streak: user.streak,
      isPassed,
      newBadges,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Badge checking logic
function checkBadges(user) {
  const newBadges = [];
  const earned = new Set(user.badges.map((b) => b.name));

  const rules = [
    { name: 'First Step',     icon: '🌱', condition: () => user.completedLessons.length >= 1 },
    { name: '10 Lessons',     icon: '📚', condition: () => user.completedLessons.length >= 10 },
    { name: '50 Lessons',     icon: '🎓', condition: () => user.completedLessons.length >= 50 },
    { name: '7-Day Streak',   icon: '🔥', condition: () => user.streak >= 7 },
    { name: '30-Day Streak',  icon: '💎', condition: () => user.streak >= 30 },
    { name: 'XP Centurion',   icon: '⭐', condition: () => user.xp >= 1000 },
    { name: 'XP Master',      icon: '👑', condition: () => user.xp >= 5000 },
  ];

  for (const rule of rules) {
    if (!earned.has(rule.name) && rule.condition()) {
      newBadges.push({ name: rule.name, icon: rule.icon });
    }
  }

  return newBadges;
}

module.exports = { getExercises, submitExercise };
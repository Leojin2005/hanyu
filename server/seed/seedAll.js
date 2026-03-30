// ============================================================
// FILE: server/seed/seedAll.js
// Master seeder — imports all data files and populates DB
// Run: node seed/seedAll.js
// ============================================================
require('dotenv').config();
const mongoose = require('mongoose');
const Vocabulary = require('../models/Vocabulary');
const Lesson = require('../models/Lesson');
const Exercise = require('../models/Exercise');
const User = require('../models/User');
const UserProgress = require('../models/UserProgress');

// Import data files
const hsk1Vocab = require('./data/hsk1Vocab');
const hsk1Lessons = require('./data/hsk1Lessons');
const hsk2Vocab = require('./data/hsk2Vocab');
const hsk2Lessons = require('./data/hsk2Lessons');
const hsk3Vocab = require('./data/hsk3Vocab');
const hsk3Lessons = require('./data/hsk3Lessons');

// Sample demo users for leaderboard
const demoUsers = [
  { username: 'LiWei', email: 'liwei@demo.com', password: 'demo123456', xp: 2450, streak: 15, currentLevel: 'HSK3', level: 25 },
  { username: 'MeiLing', email: 'meiling@demo.com', password: 'demo123456', xp: 1890, streak: 32, currentLevel: 'HSK2', level: 19 },
  { username: 'TomChen', email: 'tomchen@demo.com', password: 'demo123456', xp: 3200, streak: 45, currentLevel: 'HSK4', level: 32 },
  { username: 'SakuraJ', email: 'sakura@demo.com', password: 'demo123456', xp: 980, streak: 7, currentLevel: 'HSK1', level: 10 },
  { username: 'AnhTuan', email: 'anhtuan@demo.com', password: 'demo123456', xp: 1560, streak: 21, currentLevel: 'HSK2', level: 16 },
  { username: 'EmmaW', email: 'emma@demo.com', password: 'demo123456', xp: 4100, streak: 60, currentLevel: 'HSK5', level: 41 },
  { username: 'KimSoo', email: 'kimsoo@demo.com', password: 'demo123456', xp: 720, streak: 3, currentLevel: 'HSK1', level: 8 },
  { username: 'LucasM', email: 'lucas@demo.com', password: 'demo123456', xp: 2100, streak: 28, currentLevel: 'HSK3', level: 21 },
  { username: 'YukiTa', email: 'yuki@demo.com', password: 'demo123456', xp: 1340, streak: 12, currentLevel: 'HSK2', level: 14 },
  { username: 'PhuongN', email: 'phuong@demo.com', password: 'demo123456', xp: 550, streak: 5, currentLevel: 'HSK1', level: 6 },
];


// ============================================================
// MAIN SEED FUNCTION
// ============================================================
async function seedAll() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB\n');

    // 1) Clear everything
    console.log('Clearing existing data...');
    await Promise.all([
      Vocabulary.deleteMany({}),
      Lesson.deleteMany({}),
      Exercise.deleteMany({}),
      User.deleteMany({}),
      UserProgress.deleteMany({}),
    ]);
    console.log('Cleared.\n');

    // 2) Seed vocabulary
    console.log('Seeding vocabulary...');
    const allVocab = [...hsk1Vocab, ...hsk2Vocab, ...hsk3Vocab];
    const createdVocab = await Vocabulary.insertMany(allVocab);
    const vocabMap = {};
    createdVocab.forEach(v => { vocabMap[v.hanzi] = v._id; });
    console.log(`  HSK1: ${hsk1Vocab.length} words`);
    console.log(`  HSK2: ${hsk2Vocab.length} words`);
    console.log(`  HSK3: ${hsk3Vocab.length} words`);
    console.log(`  Total: ${createdVocab.length} vocabulary items\n`);

    // 3) Seed lessons + exercises
    console.log('Seeding lessons & exercises...');
    let totalExercises = 0;

    const allLessons = [...hsk1Lessons, ...hsk2Lessons, ...hsk3Lessons];
    for (const lessonData of allLessons) {
      // Link vocabulary IDs
      const vocabIds = (lessonData.vocabLinks || [])
        .map(h => vocabMap[h])
        .filter(Boolean);

      // Create lesson (without exercises first)
      const exercisesRaw = lessonData.exercises || [];
      delete lessonData.exercises;
      delete lessonData.vocabLinks;

      const lesson = await Lesson.create({
        ...lessonData,
        vocabularyIds: vocabIds,
      });

      // Create exercises linked to this lesson
      if (exercisesRaw.length > 0) {
        const exercisesWithLesson = exercisesRaw.map(e => ({
          ...e,
          lessonId: lesson._id,
        }));
        const created = await Exercise.insertMany(exercisesWithLesson);
        totalExercises += created.length;

        // Link exercise IDs back to lesson
        lesson.exerciseIds = created.map(e => e._id);
        await lesson.save();
      }

      console.log(`  Lesson ${lessonData.order}: "${lessonData.title}" — ${exercisesRaw.length} exercises`);
    }

    console.log(`\n  Total: ${allLessons.length} lessons, ${totalExercises} exercises\n`);

    // 4) Seed demo users for leaderboard
    console.log('Seeding demo users...');
    for (const userData of demoUsers) {
      const user = new User(userData);
      user.lastActiveDate = new Date();
      user.badges = [];

      // Add badges based on XP and streak
      if (user.xp >= 1000) user.badges.push({ name: 'XP Centurion', icon: '⭐' });
      if (user.xp >= 5000) user.badges.push({ name: 'XP Master', icon: '👑' });
      if (user.streak >= 7) user.badges.push({ name: '7-Day Streak', icon: '🔥' });
      if (user.streak >= 30) user.badges.push({ name: '30-Day Streak', icon: '💎' });

      await user.save();
      console.log(`  ${userData.username} — ${userData.xp} XP, ${userData.streak} streak`);
    }

    console.log('\nSeeding user progress...');

    for (const user of await User.find()) {
      for (const vocab of createdVocab.slice(0, 20)) { // mỗi user 20 từ
        await UserProgress.create({
          userId: user._id,
          vocabId: vocab._id,
          level: 1,
          correctCount: 0,
          wrongCount: 0,
          nextReview: new Date(),
        });
      }
    }

    console.log('User progress seeded.\n');

    // Summary
    console.log('\n' + '='.repeat(50));
    console.log('SEED COMPLETED SUCCESSFULLY');
    console.log('='.repeat(50));
    console.log(`Vocabulary:  ${createdVocab.length} words`);
    console.log(`Lessons:     ${allLessons.length}`);
    console.log(`Exercises:   ${totalExercises}`);
    console.log(`Demo Users:  ${demoUsers.length}`);
    console.log(`User Progress: ${demoUsers.length * 20} entries`);
    console.log('='.repeat(50));
    console.log('\nYou can now start the server with: npm run dev');
    console.log('Login with any demo account: email from list, password: demo123456');

    process.exit(0);
  } catch (err) {
    console.error('\nSeed error:', err);
    process.exit(1);
  }
}

seedAll();

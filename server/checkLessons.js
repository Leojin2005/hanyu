const mongoose = require('mongoose');
require('dotenv').config();
const Lesson = require('./models/Lesson');

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const total = await Lesson.countDocuments();
    const hsk1 = await Lesson.countDocuments({ hskLevel: 'HSK1' });
    const hsk2 = await Lesson.countDocuments({ hskLevel: 'HSK2' });
    const sample = await Lesson.find({ hskLevel: 'HSK1' }).limit(3).lean();
    console.log('lessons', { total, hsk1, hsk2 });
    console.log('sample', sample);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
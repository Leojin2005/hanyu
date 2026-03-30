// ============================================================
// FILE: server/models/User.js
// ============================================================
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 30,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Invalid email format'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6,
    select: false, // don't return password by default
  },
  avatar: {
    type: String,
    default: 'https://res.cloudinary.com/demo/image/upload/v1/avatars/default.png',
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  // HSK level & progress
  currentLevel: {
    type: String,
    enum: ['HSK1', 'HSK2', 'HSK3', 'HSK4', 'HSK5', 'HSK6'],
    default: 'HSK1',
  },
  // Gamification
  xp: { type: Number, default: 0 },
  level: { type: Number, default: 1 }, // user level (not HSK)
  streak: { type: Number, default: 0 },
  longestStreak: { type: Number, default: 0 },
  lastActiveDate: { type: Date, default: null },
  badges: [{
    name: String,
    icon: String,
    earnedAt: { type: Date, default: Date.now },
  }],
  xpHistory: [
    {
      date: Date,
      xp: Number,
    }
  ],
  rank: Number,
  // Completed lessons tracking
  completedLessons: [{
    lesson: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' },
    completedAt: { type: Date, default: Date.now },
    score: Number,
  }],
  // Settings
  dailyGoal: { type: Number, default: 20 }, // XP per day
  soundEnabled: { type: Boolean, default: true },
  darkMode: { type: Boolean, default: false },
  refreshToken: { type: String, select: false },
}, {
  timestamps: true,
});

// Hash password before save
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Compare password method
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Calculate level from XP
userSchema.methods.calculateLevel = function () {
  // Every 100 XP = 1 level
  return Math.floor(this.xp / 100) + 1;
};

// Update streak logic
userSchema.methods.updateStreak = function () {
  const today = new Date().toDateString();
  const lastActive = this.lastActiveDate
    ? new Date(this.lastActiveDate).toDateString()
    : null;

  if (lastActive === today) return; // already active today

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  if (lastActive === yesterday.toDateString()) {
    this.streak += 1;
  } else {
    this.streak = 1;
  }

  if (this.streak > this.longestStreak) {
    this.longestStreak = this.streak;
  }

  this.lastActiveDate = new Date();
};

module.exports = mongoose.model('User', userSchema);
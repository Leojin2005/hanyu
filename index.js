const functions = require('firebase-functions');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

require('dotenv').config();

const app = express();

app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '10mb' }));
app.use(morgan('dev'));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: 'Too many requests, please try again later.' },
});
app.use('/api', limiter);

app.use('/api/auth', require('./server/routes/authRoutes'));
app.use('/api/user', require('./server/routes/userRoutes'));
app.use('/api/lessons', require('./server/routes/lessonRoutes'));
app.use('/api/exercises', require('./server/routes/exerciseRoutes'));
app.use('/api/vocab', require('./server/routes/vocabRoutes'));
app.use('/api/leaderboard', require('./server/routes/leaderboardRoutes'));

app.get('/api/health', (req, res) => res.json({ status: 'ok', timestamp: new Date().toISOString() }));

const { notFound, errorHandler } = require('./server/middleware/errorMiddleware');
app.use(notFound);
app.use(errorHandler);

const connectDb = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');
  }
};

exports.api = functions.region('asia-southeast1').https.onRequest(async (req, res) => {
  try {
    await connectDb();
    return app(req, res);
  } catch (err) {
    console.error('Functions DB connect error', err);
    return res.status(500).json({ error: err.message });
  }
});

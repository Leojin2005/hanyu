import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import lessonReducer from './lessonSlice';
import vocabReducer from './vocabSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    lessons: lessonReducer,
    vocab: vocabReducer,
  },
});
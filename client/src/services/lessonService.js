import api from './api';

export const lessonService = {
  getAll: (params) => api.get('/lessons', { params }),
  getById: (id) => api.get(`/lessons/${id}`),
  getExercises: (lessonId) => api.get(`/exercises/${lessonId}`),
  submitExercise: (data) => api.post('/exercises/submit', data),
};
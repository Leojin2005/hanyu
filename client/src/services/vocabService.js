import api from './api';

export const vocabService = {
  getAll: (params) => api.get('/vocab', { params }),
  search: (q) => api.get('/vocab/search', { params: { q } }),
  toggleFavorite: (vocabularyId) => api.post('/vocab/favorite', { vocabularyId }),
  getFavorites: () => api.get('/vocab/favorites'),
};
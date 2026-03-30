import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { vocabService } from '../services/vocabService';

export const fetchVocab = createAsyncThunk(
  'vocab/fetchAll',
  async (params) => {
    const { data } = await vocabService.getAll(params);
    return data;
  }
);

const vocabSlice = createSlice({
  name: 'vocab',
  initialState: { items: [], favorites: [], isLoading: false },
  reducers: {
    setFavorites: (s, a) => { s.favorites = a.payload; },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVocab.pending, (s) => { s.isLoading = true; })
      .addCase(fetchVocab.fulfilled, (s, a) => {
        s.isLoading = false;
        s.items = a.payload.vocabulary;
      })
      .addCase(fetchVocab.rejected, (s) => { s.isLoading = false; });
  },
});

export const { setFavorites } = vocabSlice.actions;
export default vocabSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { lessonService } from '../services/lessonService';

export const fetchLessons = createAsyncThunk(
  'lessons/fetchAll',
  async (params) => {
    const { data } = await lessonService.getAll(params);
    return data;
  }
);

const lessonSlice = createSlice({
  name: 'lessons',
  initialState: { items: [], pagination: null, isLoading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLessons.pending, (s) => { s.isLoading = true; })
      .addCase(fetchLessons.fulfilled, (s, a) => {
        s.isLoading = false;
        s.items = a.payload.lessons;
        s.pagination = a.payload.pagination;
      })
      .addCase(fetchLessons.rejected, (s) => { s.isLoading = false; });
  },
});

export default lessonSlice.reducer;
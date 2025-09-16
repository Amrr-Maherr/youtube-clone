import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch categories
export const FetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_YOUTUBE_URL_VIDEO_CATEGORIES
      );
      return response.data;
    } catch (error) {
      return error.response?.data || error.message;
    }
  }
);

// Slice
const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(FetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default categoriesSlice.reducer;

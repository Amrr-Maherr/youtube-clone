import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch videos by category
export const FetchVideosByCategory = createAsyncThunk(
  "videosByCategory/fetchVideosByCategory",
  async ({ categoryId, Country = "EG", maxResults = 100 }) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos`,
        {
          params: {
            part: "snippet,contentDetails,statistics",
            chart: "mostPopular",
            videoCategoryId: categoryId,
            regionCode: Country,
            maxResults,
            key: "AIzaSyAMnZmDB1MLSZo4wRWt_ylmgbsDSxRZcTM",
          },
        }
      );
      return response.data;
    } catch (error) {
      return error.response?.data || error.message;
    }
  }
);

// Slice
const videosByCategorySlice = createSlice({
  name: "videosByCategory",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchVideosByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FetchVideosByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(FetchVideosByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default videosByCategorySlice.reducer;

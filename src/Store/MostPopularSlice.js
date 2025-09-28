import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch most popular videos
export const FetchMostPopularVideos = createAsyncThunk(
  "videos/fetchMostPopularVideos",
  async (Country = "EG") => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/videos",
        {
          params: {
            part: "snippet,contentDetails,statistics",
            chart: "mostPopular",
            regionCode: Country,
            maxResults: 50,
            key: "AIzaSyAMnZmDB1MLSZo4wRWt_ylmgbsDSxRZcTM",
          },
        }
      );
      return response.data.items;
    } catch (error) {
      return error.response?.data || error.message;
    }
  }
);

// Slice
const mostPopularVideosSlice = createSlice({
  name: "mostPopularVideos",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchMostPopularVideos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FetchMostPopularVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(FetchMostPopularVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default mostPopularVideosSlice.reducer;

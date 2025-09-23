import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch video comments
export const FetchVideoComments = createAsyncThunk(
  "comments/fetchVideoComments",
  async (videoId) => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/commentThreads",
        {
          params: {
            part: "snippet",
            videoId: videoId,
            key: "AIzaSyAMnZmDB1MLSZo4wRWt_ylmgbsDSxRZcTM",
            maxResults: 20,
            order: "relevance",
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
const videoCommentsSlice = createSlice({
  name: "comments",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchVideoComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FetchVideoComments.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(FetchVideoComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default videoCommentsSlice.reducer;

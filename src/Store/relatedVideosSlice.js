import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch related videos
export const FetchRelatedVideos = createAsyncThunk(
  "videos/fetchRelatedVideos",
  async (videoId) => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            part: "snippet",
            // maxResults: 20,
            // type: "video",
            id: videoId,
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

const relatedVideosSlice = createSlice({
  name: "relatedVideos",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearRelatedVideos: (state) => {
      state.data = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchRelatedVideos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FetchRelatedVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(FetchRelatedVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearRelatedVideos } = relatedVideosSlice.actions;
export default relatedVideosSlice.reducer;

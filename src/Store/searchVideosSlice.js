import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch search results
export const FetchSearchVideos = createAsyncThunk(
  "videos/fetchSearchVideos",
  async (query) => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            part: "snippet",
            maxResults: 50,
            q: query,
            type: "video",
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

const searchVideosSlice = createSlice({
  name: "searchVideos",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearSearchResults: (state) => {
      state.data = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchSearchVideos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FetchSearchVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(FetchSearchVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSearchResults } = searchVideosSlice.actions;
export default searchVideosSlice.reducer;

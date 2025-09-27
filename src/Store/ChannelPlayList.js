import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 👇 Async Thunk
export const FetchPlayLists = createAsyncThunk(
  "playlists/fetchPlayLists",
  async (id) => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/playlists",
        {
          params: {
            part: "snippet",
            channelId: id,
            key: "AIzaSyAMnZmDB1MLSZo4wRWt_ylmgbsDSxRZcTM",
          },
        }
      );
      return response.data;
    } catch (error) {
      return (error.response?.data || error.message);
    }
  }
);

// 👇 Slice
const playlistSlice = createSlice({
  name: "playlists",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchPlayLists.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FetchPlayLists.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload?.items || [];
      })
      .addCase(FetchPlayLists.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default playlistSlice.reducer;

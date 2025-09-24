// src/Store/channelSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch channel details
export const FetchChannelDetails = createAsyncThunk(
  "channel/fetchChannelDetails",
  async (channelId) => {
    try {
      const response = await axios.get(
        `${"https://www.googleapis.com/youtube/v3/channels"}`,
        {
          params: {
            part: "snippet,statistics,brandingSettings",
            id: channelId,
            key: "AIzaSyAMnZmDB1MLSZo4wRWt_ylmgbsDSxRZcTM",
          },
        }
      );
      return response.data.items[0];
    } catch (error) {
      return error.response?.data || error.message;
    }
  }
);

// Slice
const channelSlice = createSlice({
  name: "channel",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchChannelDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FetchChannelDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(FetchChannelDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default channelSlice.reducer;

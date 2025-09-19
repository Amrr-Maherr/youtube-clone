import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchVideoDetails = createAsyncThunk(
  "videos/fetchVideoDetails",
  async (videoId) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos`,
        {
          params: {
            part: "snippet,contentDetails,statistics",
            id: videoId,
            key: "AIzaSyDfEiDb-6fjNXQIDtn3Q7-PaXD5XzDir2g",
          },
        }
      );
      return response.data;
    } catch (error) {
      return error.response?.data || error.message;
    }
  }
);

const videoDetailsSlice = createSlice({
  name: "videos",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchVideoDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FetchVideoDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(FetchVideoDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default videoDetailsSlice.reducer;

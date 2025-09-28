import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch categories
export const FetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async ({ Country = "US", hl = "en" } = {}) => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/videoCategories",
        {
          params: {
            part: "snippet",
            regionCode: Country,
            key: "AIzaSyAMnZmDB1MLSZo4wRWt_ylmgbsDSxRZcTM",
            hl: hl,
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

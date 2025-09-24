import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = "AIzaSyAMnZmDB1MLSZo4wRWt_ylmgbsDSxRZcTM";

// Fetch Languages
export const FetchLanguages = createAsyncThunk(
  "i18n/fetchLanguages",
  async () => {
    try {
      const response = await axios.get(`${BASE_URL}/i18nLanguages`, {
        params: {
          part: "snippet",
          key: API_KEY,
        },
      });
      return response.data;
    } catch (error) {
      return error.response?.data || error.message;
    }
  }
);

// Fetch Regions
export const FetchRegions = createAsyncThunk("i18n/fetchRegions", async () => {
  try {
    const response = await axios.get(`${BASE_URL}/i18nRegions`, {
      params: {
        part: "snippet",
        key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    return error.response?.data || error.message;
  }
});

const i18nSlice = createSlice({
  name: "i18n",
  initialState: {
    languages: [],
    regions: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Languages
    builder
      .addCase(FetchLanguages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FetchLanguages.fulfilled, (state, action) => {
        state.loading = false;
        state.languages = action.payload.items || [];
      })
      .addCase(FetchLanguages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Regions
    builder
      .addCase(FetchRegions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FetchRegions.fulfilled, (state, action) => {
        state.loading = false;
        state.regions = action.payload.items || [];
      })
      .addCase(FetchRegions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default i18nSlice.reducer;

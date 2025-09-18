import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../Store/CategoriesSlice";
import mostPopularVideosReducer from "../Store/MostPopularSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    mostPopularVideos: mostPopularVideosReducer,
  },
});

export default store;

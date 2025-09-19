import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../Store/CategoriesSlice";
import mostPopularVideosReducer from "../Store/MostPopularSlice";
import videosByCategoryReducer from "../Store/videosByCategorySlice";
import videoDetailsReducer from "../Store/videoDetailsSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    mostPopularVideos: mostPopularVideosReducer,
    videosByCategory: videosByCategoryReducer,
    videoDetails: videoDetailsReducer,
  },
});

export default store;

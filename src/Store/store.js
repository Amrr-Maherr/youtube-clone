import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../Store/CategoriesSlice";
import mostPopularVideosReducer from "../Store/MostPopularSlice";
import videosByCategoryReducer from "../Store/videosByCategorySlice";
import videoDetailsReducer from "../Store/videoDetailsSlice";
import videoCommentsSlice from "../Store/videoCommentsSlice"
import searchVideosSlice from "../Store/searchVideosSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    mostPopularVideos: mostPopularVideosReducer,
    videosByCategory: videosByCategoryReducer,
    videoDetails: videoDetailsReducer,
    videoComments: videoCommentsSlice,
    searchVideos: searchVideosSlice,
  },
});

export default store;

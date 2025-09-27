import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../Store/CategoriesSlice";
import mostPopularVideosReducer from "../Store/MostPopularSlice";
import videosByCategoryReducer from "../Store/videosByCategorySlice";
import videoDetailsReducer from "../Store/videoDetailsSlice";
import videoCommentsSlice from "../Store/videoCommentsSlice"
import searchVideosSlice from "../Store/searchVideosSlice";
import relatedVideosSlice from "../Store/relatedVideosSlice";
import i18nSlice from "../Store/i18nSlice";
import channelSlice from "../Store/channelSlice";
import playlistSlice from "../Store/ChannelPlayList";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    mostPopularVideos: mostPopularVideosReducer,
    videosByCategory: videosByCategoryReducer,
    videoDetails: videoDetailsReducer,
    videoComments: videoCommentsSlice,
    searchVideos: searchVideosSlice,
    relatedVideos: relatedVideosSlice,
    i18n: i18nSlice,
    channel: channelSlice,
    playlist: playlistSlice,
  },
});

export default store;

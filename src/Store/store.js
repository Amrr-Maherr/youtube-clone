import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../Store/CategoriesSlice";
const store = configureStore({
  reducer: {
    categories: categoriesReducer,
  },
});

export default store;

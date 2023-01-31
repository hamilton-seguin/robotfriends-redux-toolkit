import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { robotsApi } from "../services/robotsAPI";
import counterReducer from "../features/counter/counterSlice";
import searchRobotsReducer from "../features/searchBox/searchBoxSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    searchRobots:searchRobotsReducer,
    [robotsApi.reducerPath]: robotsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
    getDefaultMiddleware().concat(robotsApi.middleware),
});

setupListeners(store.dispatch);

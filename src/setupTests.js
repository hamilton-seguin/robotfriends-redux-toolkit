import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import fetchMock from "jest-fetch-mock";

import { robotsApi } from "./services/robotsAPI";
import counterReducer from "./features/counter/counterSlice";
import searchRobotsReducer from "./features/searchBox/searchBoxSlice";

import configureMockStore from "redux-mock-store";
const setupStore = configureMockStore();
export const mockStore = setupStore();

fetchMock.enableMocks();

export const renderWithProviders = (
  ui,
  {
    preloadedState = {},
    store = configureStore({
      reducer: {
        counter: counterReducer,
        searchRobots: searchRobotsReducer,
        [robotsApi.reducerPath]: robotsApi.reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(robotsApi.middleware),
      preloadedState,
    }),
    ...renderOptions
  } = {}
) => {
  setupListeners(setupStore.dispatch);
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
};

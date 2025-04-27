import { configureStore } from "@reduxjs/toolkit";

import { userState } from './stateReducer'

export const store = configureStore({
  reducer: {
    // reducerAlias : reducerName
    userState: userState,
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
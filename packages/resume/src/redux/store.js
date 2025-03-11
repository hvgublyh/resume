import { configureStore } from "@reduxjs/toolkit";
import { userState } from './stateReducer'

export const store = configureStore({
  reducer: {
    // reducerAlias : reducerName
    userState: userState,
  }
})
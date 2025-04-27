import { createAction, createReducer } from "@reduxjs/toolkit";

import message from "../assert/ts/message";
import { TypeMessage } from "../assert/ts/MessageType";

export type TypeState = {
  message: TypeMessage;
  user: string;
}

const state: TypeState = {
  message,
  user: "",
};

// export const userState = createReducer(state, {
//   // user logic
//   login: (state, action) => {
//     state.user = action.payload;
//   },
//   logout: (state) => {
//     state.user = "";
//   },
// });
const login = createAction<string>('auth/login');
const logout = createAction<string>('auth/logout');

export const userState = createReducer(state, (builder) => {
  builder
    .addCase(login, (state, action) => {
      state.user = action.payload
    })
    .addCase(logout, (state) => {
      state.user = "";
    });
})

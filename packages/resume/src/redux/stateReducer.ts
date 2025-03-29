import { createReducer } from "@reduxjs/toolkit";
import { TypeMessage } from "../assert/ts/MessageType";
import message from '../assert/ts/message'


export interface TypeState{
  message: TypeMessage,
  user: String
}

const state: TypeState = {
  user: '',
  message
}


export const userState = createReducer(state, {
  // user logic
  'login': (state, action) => {
    state.user = action.payload;
  },
  'logout': (state) => { state.user = '' },
})


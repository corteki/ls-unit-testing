import { combineReducers } from "@reduxjs/toolkit";
import { usersSlice } from './users/UsersSlice';

export const RootReducer = combineReducers({
  users: usersSlice.reducer
})
import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { initialState } from "./InitialState";
import { UserService } from "../../services/user-service/UserService";

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsers(state) {
      state.isLoading = true;
    },
    fetchingUsersSucceeded(state, { payload }) {
      state.isLoading = false;
      state.hasSucceeded = true;
      state.users = payload;
    },
    fetchingUsersFailed(state, { payload }) {
      state.isLoading = false;
      state.hasError = true;
      state.errorMessage = payload;
    }
  }
});

const userService = new UserService();

export function getUsers() {
  const {fetchUsers, fetchingUsersFailed, fetchingUsersSucceeded} = usersSlice.actions;
  return async (dispatch: Dispatch) => {
    dispatch(fetchUsers())
    try {
      const { data } = await userService.getAll()
      dispatch(fetchingUsersSucceeded(data))
    } catch (error) {
      dispatch(fetchingUsersFailed(error.message))
    }
  }
}

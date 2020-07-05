import { usersSlice } from "./UsersSlice";
import { initialState } from "./InitialState";
import { MOCK_USERS } from "../../../fixtures";

describe('UsersSlice', () => {

  const {reducer, actions} = usersSlice;
  const MOCK_EMPTY_ACTION = {type: 'EMPTY_ACTION'};
  const MOCK_ERROR_MESSAGE = 'Something went wrong while fetching the users';

  it('should return the initialState by default', () => {
    const state = reducer(undefined, MOCK_EMPTY_ACTION);

    expect(state).toEqual(initialState);
  });

  it('should set isLoading to true when the fetchUsers action is dispatched', () => {
    const { fetchUsers } = actions;

    const { isLoading } = reducer(undefined, fetchUsers());

    expect(isLoading).toBeTruthy();
  });

  it('should set isLoading to false, hasSucceeded to true and the users when the fetchingUsersSucceeded action is dispatched', () => {
    const { fetchingUsersSucceeded } = actions;

    const { isLoading, hasSucceeded, users } = reducer(undefined, fetchingUsersSucceeded(MOCK_USERS));

    expect(isLoading).toBeFalsy();
    expect(hasSucceeded).toBeTruthy();
    expect(users).toEqual(MOCK_USERS);
  });

  it('should set isLoading to false, hasError to true and the errorMessage when the fetchingUsersFailed action is dispatched', () => {
    const { fetchingUsersFailed } = actions;

    const {isLoading, hasError, errorMessage} = reducer(undefined, fetchingUsersFailed(MOCK_ERROR_MESSAGE));

    expect(isLoading).toBeFalsy();
    expect(hasError).toBeTruthy();
    expect(errorMessage).toEqual(MOCK_ERROR_MESSAGE);
  });
});

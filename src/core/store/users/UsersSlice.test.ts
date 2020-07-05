import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import { usersSlice, getUsers } from "./UsersSlice";
import { initialState } from "./InitialState";
import { MOCK_USERS } from "../../../fixtures";
import { Http } from "../../services/http/Http";

describe('UsersSlice', () => {

  const { reducer, actions } = usersSlice;
  const MOCK_EMPTY_ACTION = {type: 'EMPTY_ACTION'};
  const MOCK_ERROR_MESSAGE = 'Something went wrong while fetching the users';
  const MOCK_ERROR = new Error(MOCK_ERROR_MESSAGE);
  const MOCK_STORE = configureMockStore([thunk]);

  describe('reducer', () => {

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

  describe('thunks', () => {

    it('should call the fetchUsers and fetchingUsersSucceeded actions when getUsers is successful', async () => {
      const { fetchUsers, fetchingUsersSucceeded } = actions;
  
      const store = MOCK_STORE(initialState);
  
      (Http as jest.Mocked<typeof Http>).get.mockResolvedValue({ data: MOCK_USERS });
      const expectedActions = [fetchUsers(), fetchingUsersSucceeded(MOCK_USERS)];
  
      await store.dispatch<any>(getUsers());
  
      expect(store.getActions()).toEqual(expectedActions);
    });
  
    it('should call the fetchUsers and fetchingUsersFailed actions when getUsers is unsuccessful', async () => {
      const { fetchUsers, fetchingUsersFailed } = actions;
  
      const store = MOCK_STORE(initialState);
  
      (Http as jest.Mocked<typeof Http>).get.mockRejectedValue(MOCK_ERROR);
      const expectedActions = [fetchUsers(), fetchingUsersFailed(MOCK_ERROR_MESSAGE)];
  
      await store.dispatch<any>(getUsers());
  
      expect(store.getActions()).toEqual(expectedActions);
    });
    
  });
  
});

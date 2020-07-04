import React, { useEffect } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useSelector, Provider, useDispatch } from 'react-redux';
import { usersSelector } from '../../core/store/users/UsersSelector';
import { initialState } from '../../core/store/users/InitialState';
import { store } from '../../core/store/Store';
import { getUsers } from '../../core/store/users/UsersSlice';
import { MOCK_USERS } from '../../fixtures';
import { Http } from '../../core/services/http/Http';

describe('<Users/>', () => {

  describe('users state selector', () => {

    beforeAll(() => {
      (Http as jest.Mocked<typeof Http>).get.mockResolvedValue({ data: MOCK_USERS });
    });

    it('should receive the initial state', () => {
      const { result } = renderHook(() => 
      useSelector(usersSelector),
      {
        wrapper: ({children}) => 
        <Provider store={store}>{children}</Provider>
      });

      expect(result.current).toEqual(initialState)
    });

    it('should get an updated version of the state with a list of users when the getUsers action is dispatched', async () => {
      const { result, unmount, wait } = renderHook(() => {
        const dispatch = useDispatch();
        const state = useSelector(usersSelector);

        useEffect(() => {
          dispatch(getUsers())
        }, [dispatch]);

        return state;
      },
      {
        wrapper: ({children}) => 
        <Provider store={store}>{children}</Provider>
      });

      try {
        await wait(() => result.current.users.length > 0);
        expect(result.current)
        .toEqual({
          ...initialState,
          users: MOCK_USERS,
          hasSucceeded: true
        });
      } finally {
        unmount();
      }
      
    });
  });
});
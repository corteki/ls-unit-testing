import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';

export const MOCK_EMPTY_ACTION = {type: 'EMPTY_ACTION'};
export const MOCK_ERROR_MESSAGE = 'Something went wrong while fetching the users';
export const MOCK_ERROR = new Error(MOCK_ERROR_MESSAGE);
export const MOCK_STORE = configureMockStore([thunk]);
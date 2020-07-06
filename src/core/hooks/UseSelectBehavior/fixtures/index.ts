import { ChangeEvent, MouseEvent } from "react";

export const MOCK_DEFAULT_IS_OPEN = false;
export const MOCK_DEFAULT_VALUE = '';
export const MOCK_INPUT_VALUE = 'mock-input-value';
export const MOCK_SELECT_VALUE =  'mock-select-value';
export const MOCK_INITIAL_STATE = { isOpen: MOCK_DEFAULT_IS_OPEN, inputValue: MOCK_DEFAULT_VALUE };
export const MOCK_CLICK_EVENT = {} as MouseEvent<HTMLInputElement>;
export const MOCK_INPUT_EVENT = { currentTarget: { value: MOCK_INPUT_VALUE } } as ChangeEvent<HTMLInputElement>;
export const MOCK_SELECT_EVENT = { currentTarget: { value: MOCK_SELECT_VALUE } } as MouseEvent<HTMLOptionElement>;
export const MOCK_CLEAR_EVENT = {} as MouseEvent<HTMLSpanElement>;

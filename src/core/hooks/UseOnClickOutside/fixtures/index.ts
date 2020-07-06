import { createRef } from "react";

export const MOCK_IS_OPEN = true;
export const MOCK_EVENT = {
  target: 'MOCK_TARGET'
};
export const MOCK_HANDLER = jest.fn();
export const MOCK_REF = {
  ...createRef<HTMLElement>(),
  current: document.createElement('div')
};
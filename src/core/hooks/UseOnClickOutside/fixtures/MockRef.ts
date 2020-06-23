import { createRef } from "react";

export const MOCK_REF = {
  ...createRef<HTMLElement>(),
  current: document.createElement('div')
};

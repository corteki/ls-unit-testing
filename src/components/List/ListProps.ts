import { MouseEvent } from 'react';

export interface ListProps {
  isVisible: boolean;
  values: Array<string>;
  onClick: (e: MouseEvent<HTMLOptionElement>) => void;
}

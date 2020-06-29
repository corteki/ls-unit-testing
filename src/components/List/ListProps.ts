import { MouseEvent } from 'react';

export interface ListProps {
  values: Array<string>;
  onClick: (e: MouseEvent<HTMLOptionElement>) => void;
}

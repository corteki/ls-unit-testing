import {MouseEvent, KeyboardEvent, ChangeEvent} from 'react';

export interface InputProps {
  value: string;
  placeholder: string;
  onClick: (e: MouseEvent<HTMLInputElement>) => void;
  onClear: (e: MouseEvent<HTMLInputElement>) => void;
  onInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

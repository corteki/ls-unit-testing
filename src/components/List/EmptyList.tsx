import React, { FC } from 'react';
import { EmptyListProps } from './EmptyListProps';
import './List.scss';

export const EmptyList: FC<EmptyListProps> = ({message}) => (
  <div className="List">
    <option className="List__option">{message}</option>
  </div>
);

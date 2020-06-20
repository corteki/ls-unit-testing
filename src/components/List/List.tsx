import React, { FC } from 'react';
import { ListProps } from './ListProps';
import './List.scss';

export const List: FC<ListProps> = ({isVisible, values, onClick}) => {
  return (
    isVisible ?
    <div className="List">
      {values.map(value =>
        <option
          key={value}
          className="List__option" 
          onClick={onClick}
        >
          {value}
        </option>
      )}
    </div>
    :
    null
  )
}
  
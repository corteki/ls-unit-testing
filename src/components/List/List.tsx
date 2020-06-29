import React, { FC } from 'react';
import { ListProps } from './ListProps';
import { EmptyList } from './EmptyList';
import './List.scss';

export const List: FC<ListProps> = ({values, onClick}) => {
  if(values.length === 0) {
    return <EmptyList message="No result"/>
  }
  return (
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
  )
}
  
import React, { ReactType } from 'react';
import { Hideable } from '../interfaces/Hideable';

export const withVisibility = <T,>(Component: ReactType) => 
  (props: T & Hideable) => (
    props.isVisible ?
    <Component 
      {...props}
    /> :
    null
);
  
import React, { FC } from 'react';
import { CardProps } from './CardProps';

export const Card: FC<CardProps> = ({title, body, footer, children}) => (
  <article>
    <h2>{title}</h2>
    <div>
      <p>{body}</p>
      <small>{footer}</small>
      {children}
    </div>
  </article>
)
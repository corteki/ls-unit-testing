import React, { ReactType } from "react"
import { ListProps } from "../../components/List/ListProps";
import { inputValueFilter } from "../utilities/InputValueFilter";

export const withFilterableValues = (Component: ReactType) => 
  (values: Array<string>, inputValue: string) => 
  (props: Pick<ListProps, 'isVisible' | 'onClick'>) => (
    <Component 
      {...props} 
      values={inputValueFilter(values, inputValue)}
    />
);
    
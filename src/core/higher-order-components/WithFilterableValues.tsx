import React, { ReactType } from "react"
import { inputValueFilter } from "../utilities/InputValueFilter";

export const withFilterableValues = <T,>(Component: ReactType) => 
  (values: Array<string>, inputValue: string) => 
  (props: T) => (
    <Component 
      {...props} 
      values={inputValueFilter(values, inputValue)}
    />
);
    
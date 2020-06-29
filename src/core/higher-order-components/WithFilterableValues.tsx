import React, { ReactType } from "react"
import { inputValueFilter } from "../utilities/InputValueFilter";

export const withFilterableValues = <T,>(Component: ReactType) => 
  (values: Array<string>, inputValue: string) => 
  (props: T) => {
    return (
    <Component 
      {...props} 
      values={inputValueFilter(values, inputValue)}
    />
)};
    
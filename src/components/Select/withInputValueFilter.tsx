import React, { ReactType } from "react"
import { ListProps } from "../List/ListProps";

export const withInputValueFilter = (Component: ReactType) => 
  (values: Array<string>, inputValue: string) => 
  (props: Partial<ListProps>) => (
    <Component {...props} values={values.filter(option => option.toLowerCase().includes(inputValue))}/>
);

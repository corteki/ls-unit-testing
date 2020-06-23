import React, { FC, useRef } from "react";
import { SelectProps } from "./SelectProps";
import { Input } from "../Input/Input";
import { List } from "../List/List";
import { withFilterableValues, useSelectBehavior } from "../../core";
import "./Select.scss";

export const Select: FC<SelectProps> = ({hasFilter = true, options, placeholder}) => {
  const ref = useRef<HTMLElement>(null);
  const {
    state, handleClear, handleClick, 
    handleInput, handleSelect
  } = useSelectBehavior(ref);

  const FilterableList = withFilterableValues(List)(options, state.inputValue)

  return (
    <article 
      ref={ref}
      className="Select">
      <Input 
        value={state.inputValue} 
        placeholder={placeholder}
        onClick={handleClick}
        onInput={handleInput}
        onClear={handleClear}
      />
      { hasFilter ?
        <FilterableList 
          isVisible={state.isOpen}
          onClick={handleSelect}
        /> :
        <List
          isVisible={state.isOpen}
          values={options}
          onClick={handleSelect}
        />
      }
    </article>
  );
}

import React, { FC, useRef } from "react";
import { SelectProps } from "./SelectProps";
import { Input } from "../Input/Input";
import { List } from "../List/List";
import { withFilterableValues, useSelectBehavior } from "../../core";
import "./Select.scss";

export const Select: FC<SelectProps> = ({hasFilter = true, options, placeholder}) => {
  const ref = useRef<HTMLElement>(null);
  const { state, ...controller } = useSelectBehavior(ref);
  const FilterableList = withFilterableValues(List)(options, state.inputValue)

  return (
    <article 
      ref={ref}
      className="Select">
      <Input 
        value={state.inputValue} 
        placeholder={placeholder}
        onClick={controller.handleClick}
        onInput={controller.handleInput}
        onClear={controller.handleClear}
      />
      { hasFilter ?
        <FilterableList 
          isVisible={state.isOpen}
          onClick={controller.handleSelect}
        /> :
        <List
          isVisible={state.isOpen}
          values={options}
          onClick={controller.handleSelect}
        />
      }
    </article>
  );
}

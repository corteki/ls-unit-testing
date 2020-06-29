import React, { FC, useRef } from "react";
import { SelectProps } from "./SelectProps";
import { Input } from "../Input/Input";
import { withFilterableValues, useSelectBehavior } from "../../core";
import { FilterableListProps } from "../List/FilterableListProps";
import { DropdownList } from "..";
import "./Select.scss";

export const Select: FC<SelectProps> = ({hasFilter = true, options, placeholder}) => {
  const ref = useRef<HTMLElement>(null);
  const { state, ...controller } = useSelectBehavior(ref);
  const FilterableDropdownList = withFilterableValues<FilterableListProps>(DropdownList)(options, state.inputValue)

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
      { 
        hasFilter ?
        <FilterableDropdownList 
          isVisible={state.isOpen}
          onClick={controller.handleSelect}
        /> :
        <DropdownList
          isVisible={state.isOpen}
          values={options}
          onClick={controller.handleSelect}
        />
      }
    </article>
  );
}

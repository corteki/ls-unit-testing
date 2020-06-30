import React, { FC, useRef } from "react";
import { SelectProps } from "./SelectProps";
import { Input } from "../Input/Input";
import { useSelectBehavior, inputValueFilter } from "../../core";
import { DropdownList } from "..";
import "./Select.scss";

export const Select: FC<SelectProps> = ({hasFilter = true, options, placeholder}) => {
  const ref = useRef<HTMLElement>(null);
  const { state, ...controller } = useSelectBehavior(ref);

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
      <DropdownList
        isVisible={state.isOpen}
        values={hasFilter ? inputValueFilter(options, state.inputValue) : options}
        onClick={controller.handleSelect}
      />
    </article>
  );
}

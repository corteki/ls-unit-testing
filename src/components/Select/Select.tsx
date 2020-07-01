import React, { FC, useRef, useMemo } from "react";
import { SelectProps } from "./SelectProps";
import { Input } from "../Input/Input";
import { useSelectBehavior, inputValueFilter } from "../../core";
import { DropdownList } from "..";
import "./Select.scss";

export const Select: FC<SelectProps> = ({hasFilter = true, options, placeholder}) => {
  const ref = useRef<HTMLElement>(null);
  const { state, ...controller } = useSelectBehavior(ref);
  const filteredOptions = useMemo(() => inputValueFilter(options, state.inputValue), [state.inputValue, options])
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
        values={hasFilter ? filteredOptions : options}
        onClick={controller.handleSelect}
      />
    </article>
  );
}

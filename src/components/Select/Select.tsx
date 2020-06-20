import React, { FC, MouseEvent, useState, useRef, ChangeEvent } from "react";
import { SelectProps } from "./SelectProps";
import { Input } from "../Input/Input";
import { List } from "../List/List";
import { SelectState } from "./SelectState";
import { useOnClickOutside } from "./UseOnClickOutside";
import "./Select.scss";

export const Select: FC<SelectProps> = ({options, placeholder}) => {
  const ref = useRef<HTMLElement>(null);

  const [state, setState] = useState<SelectState>({
    isOpen: false,
    inputValue: ''
  });

  useOnClickOutside(
    ref,
    () => setState({
      ...state,
      isOpen: false
    })
  );

  const handleClick = (e: MouseEvent<HTMLInputElement>) => {
    setState({
      ...state,
      inputValue: '',
      isOpen: !state.isOpen
    });
  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      inputValue: e.currentTarget.value
    });
  }

  const handleSelect = (e: MouseEvent<HTMLOptionElement>) => {
    setState({
      ...state,
      isOpen: false,
      inputValue: e.currentTarget.value
    });
  }

  const handleClear = (e: MouseEvent<HTMLSpanElement>) => {
    setState({
      ...state,
      inputValue: ''
    });
  }

  const withInputValueFilter = (values: Array<string>): Array<string> => {
    return values.filter(option => option.toLowerCase().includes(state.inputValue))
  }

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
      <List 
        isVisible={state.isOpen}
        values={withInputValueFilter(options)}
        onClick={handleSelect}
      />
    </article>
  );
}

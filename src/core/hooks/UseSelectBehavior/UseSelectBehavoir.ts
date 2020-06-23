import { useState, RefObject, ChangeEvent, MouseEvent } from "react";
import { SelectState } from "../../../components/Select/SelectState";
import { useOnClickOutside } from "../UseOnClickOutside/UseOnClickOutside";

export const useSelectBehavior = (ref: RefObject<HTMLElement>) => {

  const [state, setState] = useState<SelectState>({
    isOpen: false,
    inputValue: ''
  });

  const handleClose = () => setState({
    ...state,
    isOpen: false
  });

  useOnClickOutside(ref, handleClose);

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

  return {
    state,
    handleClear,
    handleClick,
    handleInput,
    handleSelect,
    handleClose
  }
}
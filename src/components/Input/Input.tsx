import React, { FC } from "react";
import { InputProps } from "./InputProps";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClearIcon from '@material-ui/icons/Clear';
import "./Input.scss";

export const Input: FC<InputProps> = ({value, placeholder, onClick, onInput, onClear}) => (
  <div className="Input">
    <input
      className="Input__field"
      type="text"
      value={value}
      placeholder={placeholder}
      onClick={onClick}
      onChange={onInput}
    />
    {
      value.length > 0 &&
      <span 
        className="Input__clear"
        onClick={onClear}>
        <ClearIcon
          fontSize="small"/>
      </span>
    }
    <ArrowDropDownIcon 
      className="Input__open"
      fontSize="small"/>
  </div>
);

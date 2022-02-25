import React from "react";
import {
  DropdownWrapper,
  StyledSelect,
  StyledOption,
  StyledLabel,
  StyledButton,
} from "./styles";

export function Dropdown(props) {
  return (
    <DropdownWrapper action={props.action} onChange={props.onChange}>
      <StyledLabel htmlFor="options">{props.formLabel}</StyledLabel>
      <StyledSelect id="options" name="options">
        {props.children}
      </StyledSelect>
      <StyledButton
        type="submit"
        value={props.buttonText}
        onClick={props.onClick}
      />
    </DropdownWrapper>
  );
}

export function Option(props) {
  return <StyledOption selected={props.selected}>{props.value}</StyledOption>;
}

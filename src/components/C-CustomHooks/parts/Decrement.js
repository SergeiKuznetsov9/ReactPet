import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import { StyledButton } from "./StyledButton";

export const Decrement = ({onClick}) => {
  return (
    <StyledButton handleClick={onClick}>
      <RemoveIcon />
    </StyledButton>
  );
};

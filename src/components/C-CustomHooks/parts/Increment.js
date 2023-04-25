import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { StyledButton } from "./StyledButton";

export const Increment = ({onClick}) => {
  return (
    <StyledButton handleClick={onClick}>
      <AddIcon />
    </StyledButton>
  );
};

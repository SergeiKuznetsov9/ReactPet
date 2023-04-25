import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { StyledButton } from "./StyledButton";

export const Increment = ({onClick, ...props}) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      <AddIcon />
    </StyledButton>
  );
};
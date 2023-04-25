import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { StyledButton } from "./StyledButton";
import { useCounterContext } from "../useCounterContext";

export const Increment = () => {
  const { handleIncrement } = useCounterContext();

  return (
    <StyledButton handleClick={handleIncrement}>
      <AddIcon />
    </StyledButton>
  );
};

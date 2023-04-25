import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import { StyledButton } from "./StyledButton";
import { useCounterContext } from "../useCounterContext";

export const Decrement = () => {
  const { handleDecrement } = useCounterContext();

  return (
    <StyledButton handleClick={handleDecrement}>
      <RemoveIcon />
    </StyledButton>
  );
};

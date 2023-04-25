import React from "react";
import { AssembledCounter } from "./AssembledCounter";
import { Description } from "./Description";
import { UseCounter } from "./useCounter";

export const CustomHooks = () => {
  const { counter, handleIncrement, handleDecrement } = UseCounter();

  return (
    <>
    <Description />
      <AssembledCounter value={counter}>
        <AssembledCounter.Decrement onClick={handleDecrement}/>
        <AssembledCounter.Label label="Counter" />
        <AssembledCounter.Count />
        <AssembledCounter.Increment onClick={handleIncrement}/>
      </AssembledCounter>
    </>
  );
};

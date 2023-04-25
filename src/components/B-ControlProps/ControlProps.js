import React, { useState } from "react";
import { AssembledCounter } from "./AssembledCounter";
import { Description } from "./Description";

export const ControlProps = () => {
  const [count, setCount] = useState(0);

  return (
    <>
    <Description />
      <AssembledCounter value={count} onChange={setCount}>
        <AssembledCounter.Decrement />
        <AssembledCounter.Label label="Counter" />
        <AssembledCounter.Count />
        <AssembledCounter.Increment />
      </AssembledCounter>
    </>
  );
};

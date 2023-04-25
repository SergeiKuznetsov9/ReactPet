import React from "react";
import { CounterProvider } from "./useCounterContext";
import { Decrement } from "./parts/Decrement";
import { Increment } from "./parts/Increment";
import { Label } from "./parts/Label";
import { Count } from "./parts/Count";

const AssembledCounter = ({ value, children }) => {
  return (
    <CounterProvider value={{ value }}>
      <div className="counterContainer">{children}</div>
    </CounterProvider>
  );
};

AssembledCounter.Decrement = Decrement;
AssembledCounter.Increment = Increment;
AssembledCounter.Label = Label;
AssembledCounter.Count = Count;

export { AssembledCounter };

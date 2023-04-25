import React from "react";
import { CounterProvider } from "./useCounterContext";
import { Count } from "./parts/Count";
import { Label } from "./parts/Label";
import { Decrement } from "./parts/Decrement";
import { Increment } from "./parts/Increment";

function AssembledCounter({ children, value: count, onChange }) {

  return (
    <CounterProvider value={{ count }}>
      <div style={{
          display: 'inline-flex',
          border: '1px solid #17a2b8',
          lineHeight: '1.5',
          borderRadius: '0.25rem',
          overflow: 'hidden',
      }}>{children}</div>
    </CounterProvider>
  );
}


AssembledCounter.Count = Count;
AssembledCounter.Label = Label;
AssembledCounter.Increment = Increment;
AssembledCounter.Decrement = Decrement;

export { AssembledCounter };
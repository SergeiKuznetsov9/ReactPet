import React, { useState } from "react";
import { CounterProvider } from "./useCounterContext";
import { Decrement } from "./parts/Decrement";
import { Increment } from "./parts/Increment";
import { Label } from "./parts/Label";
import { Count } from "./parts/Count";

const AssembledCounter = ({
  value = null,
  initialValue = 0,
  onChange,
  children,
}) => {
  const [count, setCount] = useState(initialValue);
  const isControlled = value !== null && !!onChange;
  const getCount = () => (isControlled ? value : count);

  const handleIncrement = () => {
    handleCountChange(getCount() + 1);
  };

  const handleDecrement = () => {
    handleCountChange(getCount() - 1);
  };

  const handleCountChange = (newValue) => {
    isControlled ? onChange(newValue) : setCount(newValue);
  };

  return (
    <CounterProvider
      value={{ count: getCount(), handleIncrement, handleDecrement }}
    >
      <div className="counterContainer">{children}</div>
    </CounterProvider>
  );
};

AssembledCounter.Decrement = Decrement;
AssembledCounter.Increment = Increment;
AssembledCounter.Label = Label;
AssembledCounter.Count = Count;

export { AssembledCounter };

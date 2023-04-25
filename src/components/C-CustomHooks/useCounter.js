import { useState } from "react";

export const UseCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return { counter, handleIncrement, handleDecrement };
};

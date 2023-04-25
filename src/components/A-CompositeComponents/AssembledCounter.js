// Компонент счетчика. Рендерит чилдренов (составные элементы счетчика)
// и одновременно их запихивает их в свойства функции, чтобы в дальнейшем пользоваться ими
// при передаче в него пропсами чилдренов
// Кроме того, компонент определяет состояние счетчика и методы его изменения

import React, { useState } from "react";
import { CounterProvider } from "./useCounterContext";
import { Count } from "./parts/Count";
import { Decrement } from "./parts/Decrement";
import { Increment } from "./parts/Increment";
import { Label } from "./parts/Label";

const AssembledCounter = ({ children, initialValue }) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <CounterProvider value={{ count, handleIncrement, handleDecrement }}>
      <div className="counterContainer">{children}</div>
    </CounterProvider>
  );
};

AssembledCounter.Increment = Increment;
AssembledCounter.Label = Label;
AssembledCounter.Count = Count;
AssembledCounter.Decrement = Decrement;

export { AssembledCounter };

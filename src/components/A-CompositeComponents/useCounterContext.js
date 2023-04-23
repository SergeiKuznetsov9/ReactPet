// Компонент создающий контекст, провайдер и кастомный хук для получения контекста

import React, { createContext, useContext } from "react";

const CounterContext = createContext();

export const CounterProvider = ({ children, value }) => {
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

export const useCounterContext = () => {
  const context = useContext(CounterContext);
  return context;
};

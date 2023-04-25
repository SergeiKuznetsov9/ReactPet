import React from "react";
import { useCounterContext } from "../useCounterContext";

export const Count = ({ max }) => {
  const { count } = useCounterContext();

  const hasError = max ? count >= max : false;

  return (
    <div
      style={{
        backgroundColor: hasError ? "#bd2130" : "#17a2b8",
        color: "white",
        padding: "5px 7px",
      }}
    >
      {count}
    </div>
  );
};

import React from "react";
import { useCounterContext } from "../useCounterContext";

export const Count = () => {
  const { value } = useCounterContext();

  return (
    <div
      style={{
        backgroundColor: "#17a2b8",
        color: "white",
        padding: "5px 7px",
      }}
    >
      {value}
    </div>
  );
};

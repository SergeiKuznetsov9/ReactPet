import React from "react";
import { useCounterContext } from "../useCounterContext";

export const Count = () => {

    const {count} = useCounterContext()

  return (
    <div
      style={{
        backgroundColor: "#17a2b8",
        color: "white",
        padding: "5px 7px",
      }}
    >
      {count}
    </div>
  );
};

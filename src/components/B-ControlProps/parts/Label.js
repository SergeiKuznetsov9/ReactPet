import React from "react";

export const Label = ({label}) => {
  return (
    <div
      style={{
        backgroundColor: "#e9ecef",
        color: "#495057",
        padding: "5px 7px",
      }}
    >
      {label}
    </div>
  );
};

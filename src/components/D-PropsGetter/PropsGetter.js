import React from "react";
import { AssembledCounter } from "./AssembledCounter";
import { useCounter } from "./useCounter";

const MAX_COUNT = 10;

function PropsGetter() {
  const {
    count,
    getCounterProps,
    getIncrementProps,
    getDecrementProps
  } = useCounter({
    initial: 0,
    max: MAX_COUNT
  });

  const handleBtn1Clicked = () => {
    console.log("btn 1 clicked");
  };

  return (
    <>
      <AssembledCounter {...getCounterProps()}>
        <AssembledCounter.Decrement icon={"minus"} {...getDecrementProps()} />
        <AssembledCounter.Label>Counter</AssembledCounter.Label>
        <AssembledCounter.Count />
        <AssembledCounter.Increment icon={"plus"} {...getIncrementProps()} />
      </AssembledCounter>
      <div style={{marginTop: '20px'}}>
        <button {...getIncrementProps({ onClick: handleBtn1Clicked })}>
          Custom increment btn 1
        </button>
      </div>
      <div style={{marginTop: '20px'}}>
        <button {...getIncrementProps({ disabled: count > MAX_COUNT - 2 })}>
          Custom increment btn 2
        </button>
      </div>
    </>
  );
}

export { PropsGetter };


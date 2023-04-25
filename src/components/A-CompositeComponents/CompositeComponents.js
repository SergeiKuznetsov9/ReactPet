// Родительский компонент, который рендерит весь счетчик из составных элементов

import React from "react";
import { AssembledCounter } from "./AssembledCounter";
import { Description } from "./Description";

export const CompositeComponents = () => (
  <>
    <Description />

    <AssembledCounter initialValue={0}>
      <AssembledCounter.Increment />
      <AssembledCounter.Label label="Counter" />
      <AssembledCounter.Count />
      <AssembledCounter.Decrement />
    </AssembledCounter>
  </>
);

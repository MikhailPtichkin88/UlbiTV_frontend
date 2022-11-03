import React, { useState } from "react";
import "./Counter.scss";

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div>
      <h1>{counter}</h1>
      <button className="padding" onClick={() => setCounter(counter + 1)}>
        +++
      </button>
    </div>
  );
};

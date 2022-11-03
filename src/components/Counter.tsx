import React, { useState } from "react";
import styles from './Counter.module.scss';

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div>
      <h1>{counter}</h1>
      <button className={styles.green+' '+styles.padding} onClick={() => setCounter(counter + 1)}>
        +++
      </button>
    </div>
  );
};

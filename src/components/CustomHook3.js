import React, { useState } from "react";
import useCounter from "../hooks/useCounter";

function CustomHook3() {
  const [count, increment, decrement, reset] = useCounter();
  return (
    <div>
      <div>count = {count}</div>
      <button onClick={increment}>Increment </button>
      <button onClick={decrement}>decrement </button>
      <button onClick={reset}>reset </button>
    </div>
  );
}

export default CustomHook3;

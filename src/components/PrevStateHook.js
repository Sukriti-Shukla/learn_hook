import React, { useState } from "react";

function PrevStateHook() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      //count = count+1 this will give output as 1
      setCount((prevCount) => prevCount + 1); // always try to pass a function that has the access to previous value of the variable
    }
  };
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      {/* safer approach */}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      {/* not a safe approach */}
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={incrementFive}>increment by 5</button>
    </div>
  );
}

export default PrevStateHook;

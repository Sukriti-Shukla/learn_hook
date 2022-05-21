import React, { useState } from "react";

function UseStateHook() {
  const [count, setCount] = useState(0); //count is the state variable initialize to 0
  //set count is the method capable of changing the count variable
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count {count}</button>
    </div>
  );
}

export default UseStateHook;

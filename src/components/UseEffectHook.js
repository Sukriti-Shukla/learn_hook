import React, { useState, useEffect } from "react";

function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    document.title = `you clicked ${count} times`; // use effect runs after every render of the component
  }, [count]); // the second parameter is an array and the use effect function runs only when the count changes thus preventing unnecessary use of function on change of string
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>count {count}</button>
    </div>
  );
}

export default UseEffectHook;

import React, { useState, useEffect } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
// We can reuse the logic of changing document title with a custom hook and thus we can implement it in various components
function CustomHook2() {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}> Count = {count}</button>
    </div>
  );
}

export default CustomHook2;

import React, { useState, useEffect } from "react";

function IncorrectDependency() {
  const [count, setCount] = useState(0);
  const tick = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]); //id we speceffy nothing in dependency program will not work
  // hence dont forget to specify dependency, and if u put [] make sure there isnt any dependency
  return <div>{count}</div>;
}

export default IncorrectDependency;

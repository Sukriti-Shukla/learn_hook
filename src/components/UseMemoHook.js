import React, { useState, useMemo } from "react";

function UseMemoHook() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };
  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 20000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]); //react will used the cached value from the previous render
  // if counterOne does not change hence there wont be any delay if we click counterTwo as the value of counterOne is not changed

  return (
    <div>
      <div>
        <button onClick={incrementOne}> Count one - {counterOne} </button>
        <span>{isEven ? "even" : "odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}> Count Two - {counterTwo} </button>
      </div>
    </div>
  );
}

export default UseMemoHook;

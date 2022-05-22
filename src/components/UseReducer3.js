import React, { useReducer } from "react";
// We can habe multiple use reducers using the same code and working independently
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function UseReducer3() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState); // using multiple use reducers
  return (
    <div>
      <div>
        <div>count - {count}</div>
        <button onClick={() => dispatch("increment")}>Increment</button>
        <button onClick={() => dispatch("decrement")}>Decrement</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
      </div>
      <div>
        <div>count - {countTwo}</div>
        <button onClick={() => dispatchTwo("increment")}>Increment</button>
        <button onClick={() => dispatchTwo("decrement")}>Decrement</button>
        <button onClick={() => dispatchTwo("reset")}>Reset</button>
      </div>
    </div>
  );
}

export default UseReducer3;

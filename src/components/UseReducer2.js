// import React, { useReducer } from "react";
// //use reducer for complex state and action
// const initialState = {
//     firstCounter: 0
// }
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return {firstCounter: state.firstCounter + 1};
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };
// function UseReducer2() {
//   const [count, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <div>count - {count.firstCounter}</div>
//       <button onClick={() => dispatch(type : "increment")}>Increment</button>
//       <button onClick={() => dispatch(type : "decrement")}>Decrement</button>
//       <button onClick={() => dispatch(type : "reset")}>Reset</button>
//     </div>
//   );
// }

// export default UseReducer2;

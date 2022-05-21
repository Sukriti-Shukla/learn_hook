import React, { useState, useEffect } from "react";
// we can mimic component did mount by passing a second array as the parameter to useEffect
// when unmounting a component cancel all your subscriptions and listeners
//i.e. cleanup the component
function RunEffectOnce() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("unmounting");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []); //if we want the effect to run only once we define empty array as the second parameter
  //return statement within the useEffect will have the code that will run when the component unmounts
  return (
    <div>
      hooks X = {x} Y = {y}
    </div>
  );
}

export default RunEffectOnce;

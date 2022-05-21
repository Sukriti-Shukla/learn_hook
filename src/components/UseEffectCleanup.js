import React, { useEffect, useState } from "react";
import RunEffectOnce from "./RunEffectOnce";
// when unmounting a component cancel all your subscriptions and listeners
//i.e. cleanup the component
function UseEffectCleanup() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <RunEffectOnce />}
    </div>
  );
}

export default UseEffectCleanup;

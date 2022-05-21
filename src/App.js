import React from "react";
import "./App.css";
import DataFetching from "./components/DataFetching";
import IncorrectDependency from "./components/IncorrectDependency";
import ObjectAsState from "./components/ObjectAsState";
import PrevStateHook from "./components/PrevStateHook";
import RunEffectOnce from "./components/RunEffectOnce";
import UseEffectCleanup from "./components/UseEffectCleanup";
import UseEffectHook from "./components/UseEffectHook";
import UseReducer1 from "./components/UseReducer1";
import UseStateArray from "./components/UseStateArray";
import UseStateHook from "./components/UseStateHook";

function App() {
  return (
    <div className="App">
      {/* <DataFetching /> */}
      <UseReducer1 />
      {/* <IncorrectDependency /> */}
      {/* <UseEffectCleanup /> */}
      {/* <RunEffectOnce /> */}
      {/* <UseEffectHook /> */}
      <UseStateArray />
      <ObjectAsState />
      {/* <PrevStateHook /> */}
      {/* <UseStateHook /> */}
    </div>
  );
}

export default App;

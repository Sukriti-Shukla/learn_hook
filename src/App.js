import React from "react";
import "./App.css";
import CustomHook from "./components/CustomHook";
import CustomHook2 from "./components/CustomHook2";
import CustomHook3 from "./components/CustomHook3";
import DataFetching from "./components/DataFetching";
import DataFetchingUseReducer from "./components/DataFetchingUseReducer";
import IncorrectDependency from "./components/IncorrectDependency";
import ObjectAsState from "./components/ObjectAsState";
import PrevStateHook from "./components/PrevStateHook";
import RunEffectOnce from "./components/RunEffectOnce";
import UseEffectCleanup from "./components/UseEffectCleanup";
import UseEffectHook from "./components/UseEffectHook";
import UseMemoHook from "./components/UseMemoHook";
import UseReducer1 from "./components/UseReducer1";
import UseReducer3 from "./components/UseReducer3";
import UseRefHook from "./components/UseRefHook";
import UseStateArray from "./components/UseStateArray";
import UseStateHook from "./components/UseStateHook";

function App() {
  return (
    <div className="App">
      <CustomHook3 />
      <CustomHook2 />
      <CustomHook />
      <UseRefHook />
      {/* <UseMemoHook />
      <UseReducer3 />
      <DataFetchingUseReducer /> */}
      {/* <DataFetching /> */}
      {/* <UseReducer1 /> */}
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

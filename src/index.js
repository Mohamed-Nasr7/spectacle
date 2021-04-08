import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StateProvider } from "./store/StateProvider";
import reducer, { initState } from "./store/reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initState={initState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

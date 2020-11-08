import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateProvider } from "./StateProvider/StateProvider";
import reducer, { initialState } from "./StateProvider/Reducer";

ReactDOM.render(
  <StateProvider reducer={reducer} initialState={initialState}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StateProvider>,
  document.getElementById("root")
);

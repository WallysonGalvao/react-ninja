import React from "react";
import ReactDOM from "react-dom";

import "normalize.css";
import "milligram";

import { Provider } from "react-redux";
import configureStore from "./redux/store";
import App from "./App";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

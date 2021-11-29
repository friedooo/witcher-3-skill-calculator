import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./scss/index.scss";
import "./scss/app.scss";

import App from "./App";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

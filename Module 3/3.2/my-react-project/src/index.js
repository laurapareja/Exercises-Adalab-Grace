import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./componentes/serviceWorker";
// import User from "./componentes/User";
// import User2 from "./componentes/User2";
import Html from "./componentes/Html";

// ReactDOM.render(User, document.getElementById("root"));
// ReactDOM.render(User2, document.getElementById("root"));
ReactDOM.render(Html, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

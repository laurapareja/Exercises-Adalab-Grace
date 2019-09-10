import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CatList from "./components/CatList";

// ReactDOM.render(User, document.getElementById("root"));
// ReactDOM.render(User2, document.getElementById("root"));
ReactDOM.render(<CatList />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

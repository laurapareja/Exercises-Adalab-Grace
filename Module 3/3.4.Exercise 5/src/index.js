import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./componentes/serviceWorker";
import { User, User2 } from "./componentes/User";

const Users = [User, User2];

ReactDOM.render(Users, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

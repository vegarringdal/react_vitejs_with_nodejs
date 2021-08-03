import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { commonCodeString } from "common/src/exports";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

console.log(commonCodeString);

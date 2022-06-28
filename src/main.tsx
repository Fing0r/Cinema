import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import { Provider } from "react-redux";
import App from "./App";
import store from "@/store/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <App />
    </Provider>,
);

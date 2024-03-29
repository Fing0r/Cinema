import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import setupStore from "@/store/store";

const store = setupStore();
const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <HashRouter>
            <PersistGate persistor={persistor} loading={null}>
                <App />
            </PersistGate>
        </HashRouter>
    </Provider>,
);

import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import filmsApp from "@/store/reducers/reducers";

const store = createStore(filmsApp, composeWithDevTools());

export default store;

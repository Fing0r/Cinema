import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import filtersReducer from "@/store/reducers/filters.slice";
import authReducer from "@/store/reducers/auth.slice";
import modalReducer from "@/store/reducers/modal.slice";
import searchReducer from "@/store/reducers/search.slice";
import userChoiceReducer from "@/store/reducers/user-choice.slice";

const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ["auth"],
};

const userChoicePersistConfig = {
    key: "userChoice",
    storage,
    whitelist: ["favoritesFilms", "laterFilms"],
};

const filmsApp = combineReducers({
    filters: filtersReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    modal: modalReducer,
    userChoice: persistReducer(userChoicePersistConfig, userChoiceReducer),
    search: searchReducer,
});

export default filmsApp;

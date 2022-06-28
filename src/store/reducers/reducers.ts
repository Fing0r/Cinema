import { combineReducers } from "redux";
import filtersReducer from "@/store/reducers/filtrersReducer";
import authReducer from "@/store/reducers/authReducer";
import modalReducer from "@/store/reducers/modalReducer";
import userChoiceReducer from "@/store/reducers/userChoiceReducer";

const filmsApp = combineReducers({
    filters: filtersReducer,
    auth: authReducer,
    modal: modalReducer,
    userChoice: userChoiceReducer,
});

export default filmsApp;

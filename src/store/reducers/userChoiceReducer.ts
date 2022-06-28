import { DEFAULT_FILTERS } from "@/settings/config";
import { UserChoiceAction, UserChoiceState } from "@/types/store";
import { UserChoiceActionsTypes } from "@/store/actions/userChoiceActions";
import { getDataFromStorage, toggleIdInList } from "@/utils/utils";

const checkFavoritesFilms = getDataFromStorage("FavoriteFilms");
const checkLaterFilms = getDataFromStorage("LaterFilms");

const initialState: UserChoiceState = {
    userChoice: DEFAULT_FILTERS.USER_CHOICE,
    favoritesFilms: checkFavoritesFilms,
    laterFilms: checkLaterFilms,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
function userChoiceReducer(state = initialState, action: UserChoiceAction) {
    switch (action.type) {
        case UserChoiceActionsTypes.SET_FILTER_BY_USER_CHOICE:
            return { ...state, userChoice: action.payload };
        case UserChoiceActionsTypes.TOGGLE_FAVORITE_FILM:
            return {
                ...state,
                favoritesFilms: toggleIdInList(state.favoritesFilms, action.payload),
            };
        case UserChoiceActionsTypes.TOGGLE_LATER_FILM:
            return {
                ...state,
                laterFilms: toggleIdInList(state.laterFilms, action.payload),
            };
        default:
            return state;
    }
}

export default userChoiceReducer;

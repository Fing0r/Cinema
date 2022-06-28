import actionCreator from "@/store/actions/actionsCreators";

export enum UserChoiceActionsTypes {
    SET_FILTER_BY_USER_CHOICE = "SET_FILTER_BY_USER_CHOICE",
    TOGGLE_FAVORITE_FILM = "TOGGLE_FAVORITE_FILM",
    TOGGLE_LATER_FILM = "TOGGLE_LATER_FILM",
}

export const setFilteredByUserChoice = actionCreator(
    UserChoiceActionsTypes.SET_FILTER_BY_USER_CHOICE,
);
export const toggleFavoriteFilm = actionCreator(UserChoiceActionsTypes.TOGGLE_FAVORITE_FILM);
export const toggleLaterFilm = actionCreator(UserChoiceActionsTypes.TOGGLE_LATER_FILM);

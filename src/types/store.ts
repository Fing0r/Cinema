import { FiltersActionTypes } from "@/store/actions/filtersActions";
import { AuthActionTypes } from "@/store/actions/authActions";
import { ModalActionTypes } from "@/store/actions/modalActions";
import { UserChoiceActionsTypes } from "@/store/actions/userChoiceActions";

export interface IRootState {
    filters: FiltersState;
    auth: AuthState;
    modal: ModalState;
    userChoice: UserChoiceState;
}

export interface UserChoiceState {
    userChoice: string;
    favoritesFilms: number[];
    laterFilms: number[];
}

export interface FiltersState {
    selectedGenres: number[];
    year: number;
    sort: string;
    page: number;
}

interface ToggleGenreAction {
    type: FiltersActionTypes.TOGGLE_GENRE;
    payload: number;
}

interface SetYearAction {
    type: FiltersActionTypes.SET_FILTER_BY_YEAR;
    payload: string;
}

interface SetSortAction {
    type: FiltersActionTypes.SET_SORTED;
    payload: number;
}

interface ClearFiltersAction {
    type: FiltersActionTypes.CLEAR_FILTERS;
    payload: null;
}

interface SetPageAction {
    type: FiltersActionTypes.SET_CURRENT_PAGE;
    payload: number;
}

export type FiltersAction =
    | ToggleGenreAction
    | ClearFiltersAction
    | SetYearAction
    | SetSortAction
    | SetFilteredByUserChoiceAction
    | SetPageAction;

export interface AuthState {
    auth: boolean;
}

interface SetAuthAction {
    type: AuthActionTypes.SET_AUTH;
    payload: boolean;
}

export type AuthAction = SetAuthAction;

export interface ModalState {
    isOpenLoginModal: boolean;
}

interface SetModalLoginAction {
    type: ModalActionTypes.SET_ACTIVE_LOGIN_MODAL;
    payload: boolean;
}

export type ModalAction = SetModalLoginAction;

interface ToggleFavoriteAction {
    type: UserChoiceActionsTypes.TOGGLE_FAVORITE_FILM;
    payload: number;
}

interface ToggleLaterAction {
    type: UserChoiceActionsTypes.TOGGLE_LATER_FILM;
    payload: number;
}

interface SetFilteredByUserChoiceAction {
    type: UserChoiceActionsTypes.SET_FILTER_BY_USER_CHOICE;
    payload: string;
}

export type UserChoiceAction =
    | SetFilteredByUserChoiceAction
    | ToggleFavoriteAction
    | ToggleLaterAction;

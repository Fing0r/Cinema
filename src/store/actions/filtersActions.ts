import actionCreator from "@/store/actions/actionsCreators";

export enum FiltersActionTypes {
    TOGGLE_GENRE = "TOGGLE_GENRE",
    SET_FILTER_BY_YEAR = "SET_FILTER_BY_YEAR",
    SET_SORTED = "SET_SORTED",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    CLEAR_FILTERS = "CLEAR_FILTERS",
}

export const toggleGenre = actionCreator(FiltersActionTypes.TOGGLE_GENRE);
export const setFilteredByYear = actionCreator(FiltersActionTypes.SET_FILTER_BY_YEAR);
export const setSorted = actionCreator(FiltersActionTypes.SET_SORTED);
export const clearFilters = actionCreator(FiltersActionTypes.CLEAR_FILTERS);
export const setCurrentPage = actionCreator(FiltersActionTypes.SET_CURRENT_PAGE);

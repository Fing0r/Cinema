import { FiltersActionTypes } from "../actions/filtersActions";
import { FiltersAction, FiltersState } from "@/types/store";
import { DEFAULT_FILTERS } from "@/settings/config";
import { toggleIdInList } from "@/utils/utils";

const initialState: FiltersState = {
    year: DEFAULT_FILTERS.YEAR,
    sort: DEFAULT_FILTERS.SORT,
    page: DEFAULT_FILTERS.PAGE,
    selectedGenres: [],
};

// eslint-disable-next-line @typescript-eslint/default-param-last
function filtersReducer(state = initialState, action: FiltersAction) {
    switch (action.type) {
        case FiltersActionTypes.SET_CURRENT_PAGE:
            return { ...state, page: action.payload };
        case FiltersActionTypes.SET_FILTER_BY_YEAR:
            return { ...state, year: action.payload };
        case FiltersActionTypes.SET_SORTED:
            return { ...state, sort: action.payload };
        case FiltersActionTypes.TOGGLE_GENRE:
            return {
                ...state,
                selectedGenres: toggleIdInList(state.selectedGenres, action.payload),
            };
        case FiltersActionTypes.CLEAR_FILTERS:
            return {
                ...state,
                selectedGenres: [],
                year: DEFAULT_FILTERS.YEAR,
                sort: DEFAULT_FILTERS.SORT,
            };
        default:
            return state;
    }
}

export default filtersReducer;

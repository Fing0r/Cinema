import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiltersState } from "@/types/store";
import { DEFAULT_FILTERS } from "@/shared/settings/config";
import { toggleIdInList } from "@/shared/utils/utils";

const initialState: FiltersState = {
    year: DEFAULT_FILTERS.YEAR,
    sort: DEFAULT_FILTERS.SORT,
    page: DEFAULT_FILTERS.PAGE,
    selectedGenres: [],
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setFilteredByYear(state, actions: PayloadAction<number>) {
            state.year = actions.payload;
        },
        toggleGenre(state, actions: PayloadAction<number>) {
            state.selectedGenres = toggleIdInList(state.selectedGenres, actions.payload);
        },
        setSorted(state, actions: PayloadAction<string>) {
            state.sort = actions.payload;
        },
        setCurrentPage(state, actions: PayloadAction<number>) {
            state.page = actions.payload;
        },
        clearFilters(state) {
            state.page = initialState.page;
            state.year = initialState.year;
            state.sort = initialState.sort;
            state.selectedGenres = initialState.selectedGenres;
        },
    },
});

export const filtersActions = filtersSlice.actions;
export default filtersSlice.reducer;

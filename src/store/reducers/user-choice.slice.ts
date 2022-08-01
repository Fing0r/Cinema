import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DEFAULT_FILTERS } from "@/shared/settings/config";
import { toggleIdInList } from "@/shared/utils/utils";
import { UserChoiceState } from "@/types/store";

const initialState: UserChoiceState = {
    userChoice: DEFAULT_FILTERS.USER_CHOICE,
    favoritesFilms: [],
    laterFilms: [],
};
const userChoiceSlice = createSlice({
    name: "userChoice",
    initialState,
    reducers: {
        setFilteredByUserChoice(state, action: PayloadAction<string>) {
            if (state.userChoice === action.payload) return;
            state.userChoice = action.payload;
        },
        toggleFavoriteFilm(state, action: PayloadAction<number>) {
            state.favoritesFilms = toggleIdInList(state.favoritesFilms, action.payload);
        },
        toggleLaterFilm(state, action: PayloadAction<number>) {
            state.laterFilms = toggleIdInList(state.laterFilms, action.payload);
        },
    },
});

export const userChoiceActions = userChoiceSlice.actions;
export default userChoiceSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchState } from "@/types/store";

const initialState: SearchState = {
    rating: null,
    popular: null,
    genres: [],
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchRating(state, action: PayloadAction<string>) {
            state.rating = action.payload;
        },
        setSearchPopular(state, action: PayloadAction<string>) {
            state.popular = action.payload;
        },
    },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;

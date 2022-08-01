import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "@/types/store";

const initialState: AuthState = {
    auth: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth(state, action: PayloadAction<boolean>) {
            state.auth = action.payload;
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;

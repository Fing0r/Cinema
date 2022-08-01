import { createSlice } from "@reduxjs/toolkit";
import { ModalState } from "@/types/store";

const initialState: ModalState = {
    isOpenLoginModal: false,
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setActiveLoginModal(state) {
            state.isOpenLoginModal = !state.isOpenLoginModal;
        },
    },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;

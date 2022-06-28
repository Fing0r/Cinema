import { ModalActionTypes } from "@/store/actions/modalActions";
import { ModalAction, ModalState } from "@/types/store";

const initialState: ModalState = {
    isOpenLoginModal: false,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
function modalReducer(state = initialState, action: ModalAction) {
    switch (action.type) {
        case ModalActionTypes.SET_ACTIVE_LOGIN_MODAL:
            return { ...state, isOpenLoginModal: !state.isOpenLoginModal };
        default:
            return state;
    }
}

export default modalReducer;

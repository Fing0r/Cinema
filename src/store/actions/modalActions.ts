import actionCreator from "@/store/actions/actionsCreators";

export enum ModalActionTypes {
    SET_ACTIVE_LOGIN_MODAL = "SET_ACTIVE_LOGIN_MODAL",
}

export const setActiveLoginModal = actionCreator(ModalActionTypes.SET_ACTIVE_LOGIN_MODAL);

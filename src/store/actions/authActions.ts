import actionCreator from "@/store/actions/actionsCreators";

export enum AuthActionTypes {
    SET_AUTH = "SET_AUTH",
}

export const setAuth = actionCreator(AuthActionTypes.SET_AUTH);

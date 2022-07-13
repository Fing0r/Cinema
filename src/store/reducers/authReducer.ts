import { AuthActionTypes } from "@/store/actions/authActions";
import { AuthAction, AuthState } from "@/types/store";
import { getDataFromStorage } from "@/utils/utils";

// @ts-ignore
const checkAuth = getDataFromStorage("Login", false);

const initialState: AuthState = {
    auth: checkAuth,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
function authReducer(state = initialState, action: AuthAction) {
    switch (action.type) {
        case AuthActionTypes.SET_AUTH:
            return { ...state, auth: action.payload };
        default:
            return state;
    }
}

export default authReducer;

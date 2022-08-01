import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { authActions } from "@/store/reducers/auth.slice";
import { filtersActions } from "@/store/reducers/filters.slice";
import { modalActions } from "@/store/reducers/modal.slice";
import { userChoiceActions } from "@/store/reducers/user-choice.slice";
import { searchActions } from "@/store/reducers/search.slice";

const actions = {
    ...authActions,
    ...filtersActions,
    ...modalActions,
    ...userChoiceActions,
    ...searchActions,
};

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(actions, dispatch);
};

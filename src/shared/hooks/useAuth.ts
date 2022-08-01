import useTypedSelector from "@/shared/hooks/redux";
import { selectAuth } from "@/store/selectors";
import { useActions } from "@/shared/hooks/useActions";

function useAuth() {
    const auth = useTypedSelector(selectAuth);
    const { setActiveLoginModal } = useActions();

    if (!auth) {
        setActiveLoginModal();
    }

    return [auth];
}

export default useAuth;

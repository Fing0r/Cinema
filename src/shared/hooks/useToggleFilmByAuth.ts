import { useCallback } from "react";
import { useActions } from "@/shared/hooks/useActions";
import useTypedSelector from "@/shared/hooks/redux";
import { selectAuth } from "@/store/selectors";

function useToggleFilm(id: number, toggleFilm: (arg1: number) => void) {
    const { setActiveLoginModal } = useActions();
    const auth = useTypedSelector(selectAuth);

    return useCallback(() => {
        if (!auth) {
            setActiveLoginModal();
            return;
        }

        toggleFilm(id);
    }, [auth, id, setActiveLoginModal, toggleFilm]);
}

export default useToggleFilm;

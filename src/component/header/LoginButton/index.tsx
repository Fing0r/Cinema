import React, { FC, memo, useCallback } from "react";
import { Button } from "@mui/material";
import useTypedSelector from "@/shared/hooks/redux";
import { selectAuth } from "@/store/selectors";
import { useActions } from "@/shared/hooks/useActions";
import { DEFAULT_FILTERS } from "@/shared/settings/config";

const LoginButton: FC = memo(() => {
    const auth = useTypedSelector(selectAuth);
    const { setActiveLoginModal, setFilteredByUserChoice, setAuth } = useActions();

    const handleClick = useCallback(() => {
        if (!auth) {
            setActiveLoginModal();
            return;
        }

        setAuth(false);
        setFilteredByUserChoice(DEFAULT_FILTERS.USER_CHOICE);
    }, [auth, setActiveLoginModal, setAuth, setFilteredByUserChoice]);
    return (
        <Button
            variant='contained'
            color='success'
            sx={{ textTransform: "unset" }}
            onClick={handleClick}
        >
            {auth ? "Выйти" : "Войти"}
        </Button>
    );
});

export { LoginButton };

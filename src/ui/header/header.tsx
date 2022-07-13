import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppBar, Button, Container, Toolbar } from "@mui/material/";
import LoginModal from "@/ui/modal";
import useTypedSelector from "@/hooks/redux";
import { setAuth } from "@/store/actions/authActions";
import { setActiveLoginModal } from "@/store/actions/modalActions";
import { updateDataFromStorage } from "@/utils/utils";
import { setFilteredByUserChoice } from "@/store/actions/userChoiceActions";
import { DEFAULT_FILTERS } from "@/settings/config";
import { selectAuth, selectIsOpenLoginModal } from "@/store/selectors";
import Nav from "@/ui/header/nav/nav";

const Header = memo(() => {
    const auth = useTypedSelector(selectAuth);
    const isOpenLoginModal = useTypedSelector(selectIsOpenLoginModal);
    const dispatch = useDispatch();

    useEffect(() => {
        updateDataFromStorage("Login", auth);
    }, [auth]);

    const handleClick = () => {
        if (auth) {
            dispatch(setAuth(false));
            dispatch(setFilteredByUserChoice(DEFAULT_FILTERS.USER_CHOICE));
        } else {
            dispatch(setActiveLoginModal());
        }
    };

    return (
        <AppBar position='static'>
            <Container maxWidth='lg'>
                <Toolbar disableGutters>
                    <Nav />
                    <Button
                        variant='contained'
                        color='success'
                        sx={{ textTransform: "unset" }}
                        onClick={handleClick}
                    >
                        {auth ? "Выйти" : "Войти"}
                    </Button>
                </Toolbar>
            </Container>
            <LoginModal active={isOpenLoginModal} handleClick={handleClick} />
        </AppBar>
    );
});

export default Header;

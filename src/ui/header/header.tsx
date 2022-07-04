import React, { FC, memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import LoginModal from "@/ui/modal";
import useTypedSelector from "@/hooks/redux";
import { setAuth } from "@/store/actions/authActions";
import { setActiveLoginModal } from "@/store/actions/modalActions";
import { updateDataFromStorage } from "@/utils/utils";
import { setFilteredByUserChoice } from "@/store/actions/userChoiceActions";
import { DEFAULT_FILTERS } from "@/settings/config";
import styles from "./header.module.scss";
import Nav from "@/ui/header/nav/nav";
import { selectAuth, selectIsOpenLoginModal } from "@/store/selectors";

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
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.header__wrapper}>
                    <Nav />
                    <button
                        className={`${styles.header__login} btn`}
                        type='button'
                        onClick={handleClick}
                    >
                        {auth ? "Выйти" : "Войти"}
                    </button>
                    <LoginModal active={isOpenLoginModal} handleClick={handleClick} />
                </div>
            </div>
        </header>
    );
});

export default Header;

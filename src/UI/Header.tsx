import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import LoginModal from "@/UI/Modal";
import useTypedSelector from "@/hooks/redux";
import { setAuth } from "@/store/actions/authActions";
import { setActiveLoginModal } from "@/store/actions/modalActions";
import { updateDataFromStorage } from "@/utils/utils";
import { setFilteredByUserChoice } from "@/store/actions/userChoiceActions";
import { DEFAULT_FILTERS } from "@/settings/config";

const Header: FC = () => {
    const { auth } = useTypedSelector(({ auth }) => auth);
    const { isOpenLoginModal } = useTypedSelector(({ modal }) => modal);
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
        <header className='header'>
            <div className='container'>
                <div className='header__wrapper'>
                    <nav className='header__nav nav'>
                        <ul className='nav__list'>
                            <li className='nav__item'>
                                <a href='/' className='nav__link'>
                                    Home
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <button className='header__login btn' type='button' onClick={handleClick}>
                        {auth ? "Выйти" : "Войти"}
                    </button>
                    <LoginModal active={isOpenLoginModal} handleClick={handleClick} />
                </div>
            </div>
        </header>
    );
};

export default Header;

import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./nav.module.scss";

const Nav: FC = () => {
    return (
        <nav className='nav'>
            <ul className={styles.nav__list}>
                <li className='nav__item'>
                    <NavLink to='/' className={styles.nav__link}>
                        Home
                    </NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink to='/search' className={styles.nav__link}>
                        Search
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;

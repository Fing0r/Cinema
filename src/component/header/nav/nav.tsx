import React, { FC, memo } from "react";
import { NavLink } from "react-router-dom";
import { Box, Link } from "@mui/material";
import { RoutesEnum } from "@/shared/constants/routes";

const navigationLinks = [
    { name: "Каталог", href: RoutesEnum.Home },
    { name: "Поиск", href: RoutesEnum.Search },
];

const Nav: FC = memo(() => {
    return (
        <Box display='flex' flexGrow='1' alignItems='center' gap='1.25rem' component='nav'>
            {navigationLinks.map(({ name, href }) => (
                <Link
                    key={name}
                    component={NavLink}
                    to={href}
                    color='#FFF'
                    fontSize='1rem'
                    textTransform='unset'
                >
                    {name}
                </Link>
            ))}
        </Box>
    );
});

export default Nav;

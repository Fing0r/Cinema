import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { Box, Link } from "@mui/material";

const Nav: FC = () => {
    return (
        <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", gap: "20px" }}
            component='nav'
        >
            <Link
                component={NavLink}
                to='/'
                sx={{ textTransform: "unset", color: "white", fontSize: "16px" }}
            >
                Каталог
            </Link>
            <Link
                component={NavLink}
                to='/search'
                sx={{ textTransform: "unset", color: "white", fontSize: "16px" }}
            >
                Поиск
            </Link>
        </Box>
    );
};

export default Nav;

import React, { memo } from "react";
import { AppBar, Container, Toolbar } from "@mui/material/";
import Nav from "@/component/header/nav/nav";
import { LoginButton } from "@/component/header/LoginButton";
import LoginModal from "@/component/modal";

const Header = memo(() => {
    return (
        <AppBar position='static'>
            <Container maxWidth='lg'>
                <Toolbar disableGutters>
                    <Nav />
                    <LoginButton />
                </Toolbar>
            </Container>
            <LoginModal />
        </AppBar>
    );
});

export default Header;

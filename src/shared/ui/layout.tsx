import { FC, memo } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/component/header/header";

const Layout: FC = memo(() => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
});

export default Layout;

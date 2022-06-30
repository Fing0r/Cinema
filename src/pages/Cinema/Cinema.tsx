import { FC } from "react";
import "./Cinema.scss";
import Header from "@/UI/Header";
import Container from "@/pages/Cinema/component/Films/Container";

const Cinema: FC = () => {
    return (
        <div style={{ position: "relative" }}>
            {/* <Header /> */}
            <main>
                <Container />
            </main>
        </div>
    );
};

export default Cinema;

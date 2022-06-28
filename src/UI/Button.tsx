import { FC } from "react";
import { IButton } from "@/types/UI";

const Button: FC<IButton> = ({ onClick, disabled, className, children, type }) => {
    // const Button: FC<IButton> = ({ children, className, onClick, type }) => {
    return (
        <button
            className={`${className} btn`}
            onClick={onClick}
            type={type ? "button" : "submit"}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;

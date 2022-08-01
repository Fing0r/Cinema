import { FC } from "react";
import { IButton } from "@/types/ui";

const Button: FC<IButton> = ({ onClick, disabled, className, children, type }) => {
    // const Button: FC<IButton> = ({ children, className, onClick, type }) => {
    return (
        <button
            className={`${className} btn`}
            onClick={onClick}
            type={type ? "submit" : "button"}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;

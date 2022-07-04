import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ICheckbox {
    id: number;
    name: string;
    children?: ReactNode;
    props?: HTMLButtonElement;
}

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: () => void;
}

export interface ICheckboxesByGenres {
    title?: string;
}

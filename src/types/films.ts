import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IFilm {
    title: string;
    id: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
    popularity: number;
    genre_ids: number[];
    release_date: string;
}

export interface ICardFilm {
    title: string;
    vote_average: number;
    poster_path: string;
    id: number;
}

export type IHandleChangeRadio = (
    e: ChangeEvent<HTMLInputElement>,
    setValue: Dispatch<SetStateAction<string | null>>,
) => void;

export type IFilterByUserChoice = (
    userChoice: string,
    favoritesFilms: number[],
    laterFilms: number[],
    films: IFilm[],
) => IFilm[];

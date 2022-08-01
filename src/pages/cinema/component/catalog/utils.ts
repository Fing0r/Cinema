import { IFilm } from "@/types/films";

function getPositionItems(page: number) {
    const position = page * 10;
    return [position - 10, position];
}

export function getCurrentPageFilms(page: number, films: IFilm[]) {
    return films.slice(...getPositionItems(page));
}

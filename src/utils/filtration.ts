import { getYear, isFilmInArr } from "@/utils/utils";
import { IFilms } from "@/types/Films";
import { SORT } from "@/settings/config";

export const filterByYear = (year: number, release_date: string) =>
    !year || getYear(release_date) === year;

export const filterByGenres = (genres: number[], genre_ids: number[]) =>
    !genres.length || isFilmInArr(genres, genre_ids);

export function getSort(sort: string): (arg0: IFilms, arg1: IFilms) => number {
    switch (sort) {
        case SORT.POPULAR_DOWN:
            return ({ popularity: a }, { popularity: b }) => b - a;
        case SORT.POPULAR_UP:
            return ({ popularity: a }, { popularity: b }) => a - b;
        case SORT.RATING_DOWN:
            return ({ vote_average: a }, { vote_average: b }) => b - a;
        case SORT.RATING_UP:
        default:
            return ({ vote_average: a }, { vote_average: b }) => a - b;
    }
}

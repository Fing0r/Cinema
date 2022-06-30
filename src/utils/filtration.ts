import { getYear, isFilmInArr } from "@/utils/utils";

export const filterByYear = (year: number, release_date: string) =>
    !year || getYear(release_date) === year;

export const filterByGenres = (genres: number[], genre_ids: number[]) =>
    !genres.length || isFilmInArr(genres, genre_ids);

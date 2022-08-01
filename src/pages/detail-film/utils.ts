import { IFilm } from "@/types/films";
import filtersGenresData from "@/shared/api/filtersGenresData";

export const getGenresList = (film: IFilm) =>
    filtersGenresData.reduce(
        (acc: string[], { name, id }) => (film.genre_ids.includes(id) ? [...acc, name] : acc),
        [],
    );

export const getPoster = (src: string) => `https://image.tmdb.org/t/p/w300/${src}`;

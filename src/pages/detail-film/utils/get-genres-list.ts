import { IFilm } from "@/types/films";
import filtersGenresData from "@/api/filtersGenresData";

const getGenresList = (film: IFilm) =>
    filtersGenresData.reduce(
        (acc: string[], { name, id }) => (film.genre_ids.includes(id) ? [...acc, name] : acc),
        [],
    );

export default getGenresList;

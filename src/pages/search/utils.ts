import { filterByGenres, filterByPopularity, filterByRating } from "@/utils/filters";
import FilmsData from "@/api/filmsData";

export const getFilterFilm = (
    genres: number[],
    rating: string | null,
    popularity: string | null,
) => {
    const filterFilmsByGenres = genres.length ? filterByGenres(genres, FilmsData) : FilmsData;
    const filterFilmsByRating = filterByRating(rating, filterFilmsByGenres);
    return filterByPopularity(popularity, filterFilmsByRating);
};

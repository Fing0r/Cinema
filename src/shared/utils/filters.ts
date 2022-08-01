import { getYear, isFilmInArr } from "@/shared/utils/utils";
import { IFilm, IFilterByUserChoice } from "@/types/films";
import { SortEnum, UserChoiceEnum } from "@/shared/settings/config";

export const filterByYear = (year: number, films: IFilm[]) => {
    if (!year) return [...films];

    return films.filter(({ release_date }) => getYear(release_date) === year);
};

export const filterByGenres = (genres: number[], films: IFilm[]) => {
    if (!genres.length) return [...films];

    return films.filter(({ genre_ids }) => isFilmInArr(genres, genre_ids));
};

export function getSortFilms(sort: string, films: IFilm[]) {
    switch (sort) {
        case SortEnum.POPULAR_DOWN:
            return films.sort(({ popularity: a }, { popularity: b }) => b - a);
        case SortEnum.POPULAR_UP:
            return films.sort(({ popularity: a }, { popularity: b }) => a - b);
        case SortEnum.RATING_DOWN:
            return films.sort(({ vote_average: a }, { vote_average: b }) => b - a);
        case SortEnum.RATING_UP:
        default:
            return films.sort(({ vote_average: a }, { vote_average: b }) => a - b);
    }
}

export const filterByRating = (activeRating: string | null, films: IFilm[]) => {
    const isHighRating = activeRating === "high";
    const highRatingFilm = ({ vote_average }: IFilm) => vote_average > 5;
    const lowRatingFilm = ({ vote_average }: IFilm) => vote_average <= 5;

    return films.filter((film) => (isHighRating ? highRatingFilm(film) : lowRatingFilm(film)));
};

export const filterByPopularity = (activePopularity: string | null, films: IFilm[]) => {
    const isPopular = activePopularity === "popular";
    const popularFilm = ({ popularity, vote_count }: IFilm) => popularity > 100 && vote_count > 200;
    const unknownFilm = ({ popularity, vote_count }: IFilm) => popularity < 100 || vote_count < 200;

    return films.filter((film) => (isPopular ? popularFilm(film) : unknownFilm(film)));
};

export const filterByUserChoice: IFilterByUserChoice = (
    userChoice,
    favoritesFilms,
    laterFilms,
    films,
) => {
    switch (userChoice) {
        case UserChoiceEnum.FAVORITES:
            return films.filter((film) => favoritesFilms.includes(film.id));
        case UserChoiceEnum.LATER:
            return films.filter((film) => laterFilms.includes(film.id));
        default:
            return films;
    }
};

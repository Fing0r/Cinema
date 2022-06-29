import { useState } from "react";
import { SORT, USER_CHOICE } from "@/settings/config";
import Films from "@/api/Films";
import { IRootState } from "@/types/store";
import { filterByGenres, filterByYear } from "@/utils/filtration";

export const selectFilmsByFilterUserChoice = (state: IRootState) => {
    const { userChoice: activeUserChoice, favoritesFilms, laterFilms } = state.userChoice;

    switch (activeUserChoice) {
        case USER_CHOICE.FAVORITES:
            return Films.filter((film) => favoritesFilms.includes(film.id));
        case USER_CHOICE.LATER:
            return Films.filter((film) => laterFilms.includes(film.id));
        default:
            return Films;
    }
};

export const selectFilmsByFilterYear = (state: IRootState) => {
    const { year } = state.filters;
    const filmsByFilter = selectFilmsByFilterUserChoice(state);

    if (!year) return [...filmsByFilter];

    return filmsByFilter.filter((film) => filterByYear(year, film.release_date));
};

export const selectFilmsByFilterGenres = (state: IRootState) => {
    const { selectedGenres: genres } = state.filters;
    const filmsByFilter = selectFilmsByFilterYear(state);

    if (!genres.length) return [...filmsByFilter];

    return filmsByFilter.filter((film) => filterByGenres(genres, film.genre_ids));
};

export const selectFilmsBySort = (state: IRootState) => {
    const { sort: ActiveSort } = state.filters;
    const filmsByFilter = selectFilmsByFilterGenres(state);

    switch (ActiveSort) {
        case SORT.POPULAR_DOWN:
            return filmsByFilter.sort(({ popularity: a }, { popularity: b }) => b - a);
        case SORT.POPULAR_UP:
            return filmsByFilter.sort(({ popularity: a }, { popularity: b }) => a - b);
        case SORT.RATING_DOWN:
            return filmsByFilter.sort(({ vote_average: a }, { vote_average: b }) => b - a);
        case SORT.RATING_UP:
        default:
            return filmsByFilter.sort(({ vote_average: a }, { vote_average: b }) => a - b);
    }
};

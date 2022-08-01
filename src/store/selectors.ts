import { createSelector } from "reselect";
import Films from "@/shared/api/filmsData";
import { IRootState } from "@/types/store";
import {
    filterByGenres,
    filterByUserChoice,
    filterByYear,
    getSortFilms,
} from "@/shared/utils/filters";

export const selectPage = (state: IRootState) => state.filters.page;
export const selectAuth = (state: IRootState) => state.auth.auth;

export const selectIsOpenLoginModal = (state: IRootState) => state.modal.isOpenLoginModal;
export const selectActiveUserChoice = (state: IRootState) => state.userChoice.userChoice;
export const selectFavoritesFilms = (state: IRootState) => state.userChoice.favoritesFilms;
export const selectLaterFilms = (state: IRootState) => state.userChoice.laterFilms;
export const selectSort = (state: IRootState) => state.filters.sort;
export const selectYear = (state: IRootState) => state.filters.year;
export const selectGenres = (state: IRootState) => state.filters.selectedGenres;

export const selectSearchRating = (state: IRootState) => state.search.rating;
export const selectSearchPopular = (state: IRootState) => state.search.popular;
// (state) => state.search.rating
const selectFilteredFilmsByUserChoice = createSelector(
    [selectActiveUserChoice, selectFavoritesFilms, selectLaterFilms],
    (activeUserChoice, favoritesFilms, laterFilms) => {
        return filterByUserChoice(activeUserChoice, favoritesFilms, laterFilms, Films);
    },
);

// const selectFilteredFilmsByYear = createSelector(
//     [selectYear, selectFilteredFilmsByUserChoice],
//     (year, filteredFilmsByUserChoice) => {
//         return filterByYear(year, filteredFilmsByUserChoice);
//     },
// );
//
// const selectFilteredFilmsByGenres = createSelector(
//     [selectGenres, selectFilteredFilmsByYear],
//     (genres, filteredFilmsByYear) => {
//         return filterByGenres(genres, filteredFilmsByYear);
//     },
// );
//
// export const selectFilteredFilms = createSelector(
//     [selectSort, selectFilteredFilmsByGenres],
//     (activeSort, filteredFilmsByGenres) => {
//         return getSortFilms(activeSort, filteredFilmsByGenres);
//     },
// );

export const selectFilteredFilms = createSelector(
    [selectFilteredFilmsByUserChoice, selectSort, selectYear, selectGenres],
    (filteredFilmsByUserChoice, activeSort, year, genres) => {
        const filteredFilmsByYear = filterByYear(year, filteredFilmsByUserChoice);
        const filteredFilmsByGenres = filterByGenres(genres, filteredFilmsByYear);

        return getSortFilms(activeSort, filteredFilmsByGenres);
    },
);

import Films from "@/api/filmsData";
import { IRootState } from "@/types/store";
import { filterByGenres, filterByUserChoice, filterByYear, getSortFilms } from "@/utils/filters";

export const selectPage = (state: IRootState) => state.filters.page;
export const selectAuth = (state: IRootState) => state.auth.auth;
export const selectIsOpenLoginModal = (state: IRootState) => state.modal.isOpenLoginModal;
export const selectActiveUserChoice = (state: IRootState) => state.userChoice.userChoice;
export const selectSort = (state: IRootState) => state.filters.sort;
export const selectYear = (state: IRootState) => state.filters.year;

export const selectFilteredFilms = (state: IRootState) => {
    const { userChoice: activeUserChoice, favoritesFilms, laterFilms } = state.userChoice;
    const { selectedGenres: genres, sort: activeSort, year } = state.filters;

    const filteredFilmsByUserChoice = filterByUserChoice(
        activeUserChoice,
        favoritesFilms,
        laterFilms,
        Films,
    );

    const filteredFilmsByYear = filterByYear(year, filteredFilmsByUserChoice);
    const filteredFilmsByGenres = filterByGenres(genres, filteredFilmsByYear);

    return getSortFilms(activeSort, filteredFilmsByGenres);
};

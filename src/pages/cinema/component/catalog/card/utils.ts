import { getDataFromStorage, updateDataFromStorage } from "@/utils/utils";

export const updateUserChoicesFilms = (id: number, storage: string, isFilmInList: boolean) => {
    const laterFilmsInStorage: number[] = getDataFromStorage(storage);
    const updateFilms = isFilmInList
        ? laterFilmsInStorage.filter((item) => item !== id)
        : [...laterFilmsInStorage, id];
    updateDataFromStorage(storage, updateFilms);
};

export const getYear = (date: string) => new Date(date).getFullYear();
export const isFilmInArr = (arr: number[], item: number[]) => item.find((id) => arr.includes(id));

export const toggleIdInList = (list: number[], id: number) => {
    const isIdInList = list.includes(id);

    return isIdInList ? list.filter((item) => item !== id) : [...list, id];
};

export function getDataFromStorage(storage: string, reserve = "[]") {
    const getJSONFromStorage = localStorage.getItem(storage) ?? reserve;
    return JSON.parse(getJSONFromStorage);
}

export function updateDataFromStorage(storage: string, data: unknown) {
    const dataJSON = JSON.stringify(data);
    localStorage.setItem(storage, dataJSON);
}

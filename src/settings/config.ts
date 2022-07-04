export const SORT = {
    POPULAR_DOWN: "popularDown",
    POPULAR_UP: "popularUp",
    RATING_DOWN: "ratingDown",
    RATING_UP: "ratingUp",
};

export const USER_CHOICE = {
    DEFAULT: "default",
    LATER: "later",
    FAVORITES: "favorites",
};

export const DEFAULT_FILTERS = {
    YEAR: 0,
    SORT: SORT.POPULAR_DOWN,
    PAGE: 1,
    USER_CHOICE: USER_CHOICE.DEFAULT,
};

export const userOptionsChoiceData = [
    { value: "default", title: "По-умолчанию" },
    { value: "later", title: "Смотреть позже" },
    { value: "favorites", title: "Избранные" },
];

export const yearOptionsData = [
    { value: 0, title: "По умолчанию" },
    { value: 2020, title: "2020" },
    { value: 2019, title: "2019" },
    { value: 2018, title: "2018" },
    { value: 2017, title: "2017" },
];

export const sortOptionsData = [
    { value: SORT.POPULAR_DOWN, title: "Популярные по убыванию" },
    { value: SORT.POPULAR_UP, title: "Популярные по возрастанию" },
    { value: SORT.RATING_DOWN, title: "Рейтинг по убыванию" },
    { value: SORT.RATING_UP, title: "Рейтинг по возрастанию" },
];

export const ratingRadioBtnData = [
    { label: "Низкая", value: "low" },
    { label: "Высокая", value: "high" },
];
export const popularRadioBtnData = [
    { label: "Неизвестный", value: "unknown" },
    { label: "Популярный", value: "poplar" },
];

export const SEARCH_BLOCK = {
    FILM: "film",
    RATING: "rating",
    POPULAR: "popular",
    GENRES: "genres",
};

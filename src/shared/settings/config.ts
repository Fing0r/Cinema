export enum SortEnum {
    POPULAR_DOWN = "popularDown",
    POPULAR_UP = "popularUp",
    RATING_DOWN = "ratingDown",
    RATING_UP = "ratingUp",
}

export enum UserChoiceEnum {
    DEFAULT = "default",
    LATER = "later",
    FAVORITES = "favorites",
}

export const DEFAULT_FILTERS = {
    YEAR: 0,
    SORT: SortEnum.POPULAR_DOWN,
    PAGE: 1,
    USER_CHOICE: UserChoiceEnum.DEFAULT,
};

export const userOptionsChoiceData = [
    { value: UserChoiceEnum.DEFAULT, title: "По-умолчанию" },
    { value: UserChoiceEnum.LATER, title: "Смотреть позже" },
    { value: UserChoiceEnum.FAVORITES, title: "Избранные" },
];

export const yearOptionsData = [
    { value: 0, title: "По умолчанию" },
    { value: 2020, title: "2020" },
    { value: 2019, title: "2019" },
    { value: 2018, title: "2018" },
    { value: 2017, title: "2017" },
];

export const sortOptionsData = [
    { value: SortEnum.POPULAR_DOWN, title: "Популярные по убыванию" },
    { value: SortEnum.POPULAR_UP, title: "Популярные по возрастанию" },
    { value: SortEnum.RATING_DOWN, title: "Рейтинг по убыванию" },
    { value: SortEnum.RATING_UP, title: "Рейтинг по возрастанию" },
];

export enum SearchParamsEnum {
    LOW = "low",
    HIGH = "high",
    POPULAR = "popular",
    UNKNOWN = "unknown",
}

export const ratingRadioBtnData = [
    { value: SearchParamsEnum.LOW, label: "Низкая" },
    { value: SearchParamsEnum.HIGH, label: "Высокая" },
];

export const popularRadioBtnData = [
    { value: SearchParamsEnum.UNKNOWN, label: "Неизвестный" },
    { value: SearchParamsEnum.POPULAR, label: "Популярный" },
];

export const SEARCH_BLOCK = {
    FILM: "film",
    RATING: "rating",
    POPULAR: "popular",
    GENRES: "genres",
};

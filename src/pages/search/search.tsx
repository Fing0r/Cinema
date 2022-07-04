import { FC, useState } from "react";
import styles from "./search.module.scss";
import { CheckboxesByGenres } from "@/pages/cinema/component/filters/checkboxes-by-genres";
import useTypedSelector from "@/hooks/redux";
import { IFilm, IHandleChangeRadio } from "@/types/films";
import { CardFilm } from "@/pages/cinema/component/catalog/card";
import { RadioButtons } from "@/ui/radio-buttons";
import { popularRadioBtnData, ratingRadioBtnData, SEARCH_BLOCK } from "@/settings/config";
import { getFilterFilm } from "@/pages/search/utils";

const SearchFilm: FC = () => {
    const { selectedGenres: genres } = useTypedSelector((state) => state.filters);
    const [popularity, setPopularity] = useState<null | string>(null);
    const [rating, setRating] = useState<null | string>(null);
    const [numberFilm, setNumberFilm] = useState(0);
    const [films, setFilms] = useState<IFilm[]>([]);
    const [showBlock, setShowBlock] = useState(SEARCH_BLOCK.GENRES);

    const handleClick = () => {
        switch (showBlock) {
            case SEARCH_BLOCK.FILM:
                setNumberFilm((prv) => prv + 1);
                return;
            case SEARCH_BLOCK.RATING:
                setShowBlock(SEARCH_BLOCK.POPULAR);
                return;
            case SEARCH_BLOCK.POPULAR:
                setFilms(() => [...getFilterFilm(genres, rating, popularity)]);
                setShowBlock(SEARCH_BLOCK.FILM);
                return;
            default:
                setShowBlock(SEARCH_BLOCK.RATING);
        }
    };

    const handleChange: IHandleChangeRadio = (e, setValue) => {
        const { value } = e.target;
        setValue(value);
    };

    const filmData = { ...films[numberFilm] };
    const filmItem = <CardFilm {...filmData} />;

    return (
        <div className={styles.search}>
            <div className='container'>
                <div className={styles.search__wrapper}>
                    {showBlock === SEARCH_BLOCK.GENRES && (
                        <>
                            <CheckboxesByGenres title='Выберите жанр' />
                            <button
                                type='button'
                                className={`${styles.search__btn} btn`}
                                onClick={handleClick}
                            >
                                Дальше
                            </button>
                        </>
                    )}
                    {showBlock === SEARCH_BLOCK.RATING && (
                        <>
                            <RadioButtons
                                className={styles.search__fieldset}
                                title='Выберите оценку фильма'
                                radioBtnData={ratingRadioBtnData}
                                name='rating'
                                handleChange={(e) => handleChange(e, setRating)}
                            />
                            <button
                                disabled={!rating}
                                type='button'
                                className={`${styles.search__btn} btn`}
                                onClick={handleClick}
                            >
                                Дальше
                            </button>
                        </>
                    )}
                    {showBlock === SEARCH_BLOCK.POPULAR && (
                        <>
                            <RadioButtons
                                className={styles.search__fieldset}
                                title='Выберите популярность фильма'
                                radioBtnData={popularRadioBtnData}
                                name='popular'
                                handleChange={(e) => handleChange(e, setPopularity)}
                            />
                            <button
                                disabled={!popularity}
                                type='button'
                                className={`${styles.search__btn} btn`}
                                onClick={handleClick}
                            >
                                Получить фильм
                            </button>
                        </>
                    )}
                    {showBlock === SEARCH_BLOCK.FILM && (
                        <>
                            <div>
                                {!films.length && "Фильмов не найдено"}
                                {!!films.length && !filmData.id ? "Фильмов больше нет" : filmItem}
                            </div>
                            <button
                                type='button'
                                className={`${styles.search__btn} btn`}
                                hidden={!filmData.id}
                                onClick={handleClick}
                            >
                                Следующий фильм
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export { SearchFilm };

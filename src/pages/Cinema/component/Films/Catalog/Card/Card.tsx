import { FC } from "react";
import { useDispatch } from "react-redux";
import useTypedSelector from "@/hooks/redux";
import { setActiveLoginModal } from "@/store/actions/modalActions";
import { toggleFavoriteFilm, toggleLaterFilm } from "@/store/actions/userChoiceActions";
import { getDataFromStorage, updateDataFromStorage } from "@/utils/utils";

interface ICardFilm {
    title: string;
    vote_average: number;
    poster_path: string;
    id: number;
}

const updateUserChoicesFilms = (id: number, storage: string, isFilmInList: boolean) => {
    const laterFilmsInStorage: number[] = getDataFromStorage(storage);
    const updateFilms = isFilmInList
        ? laterFilmsInStorage.filter((item) => item !== id)
        : [...laterFilmsInStorage, id];
    updateDataFromStorage(storage, updateFilms);
};

const CardFilm: FC<ICardFilm> = ({ poster_path: img, vote_average: rating, title, id }) => {
    const auth = useTypedSelector((state) => state.auth.auth);
    const isFilmInFavorite = useTypedSelector(({ userChoice }) =>
        userChoice.favoritesFilms.includes(id),
    );
    const isFilmInLater = useTypedSelector(({ userChoice }) => userChoice.laterFilms.includes(id));
    const dispatch = useDispatch();

    const handleToggleLaterFilm = () => {
        if (!auth) {
            dispatch(setActiveLoginModal());
            return;
        }
        dispatch(toggleLaterFilm(id));
        updateUserChoicesFilms(id, "LaterFilms", isFilmInLater);
    };

    const handleToggleFavoriteFilm = () => {
        if (!auth) {
            dispatch(setActiveLoginModal());
            return;
        }
        dispatch(toggleFavoriteFilm(id));
        updateUserChoicesFilms(id, "FavoriteFilms", isFilmInFavorite);
    };

    return (
        <article className='catalog__card card-film'>
            <a href='/' className='card-film__img'>
                <img src={`https://image.tmdb.org/t/p/w300/${img}`} alt='' />
            </a>
            <div className='card-film__info'>
                <div className='card-film__actions'>
                    <span className='card-film__rating'>
                        Рейтинг: <span>{rating}</span>
                    </span>
                    <button
                        className='card-film__favorites'
                        type='button'
                        onClick={handleToggleFavoriteFilm}
                    >
                        <svg
                            width='20px'
                            height='20px'
                            viewBox='0 0 36.09 36.09'
                            fill='currentColor'
                        >
                            <path
                                d='M36.042,13.909c-0.123-0.377-0.456-0.646-0.85-0.688l-11.549-1.172L18.96,1.43c-0.16-0.36-0.519-0.596-0.915-0.596
		s-0.755,0.234-0.915,0.598L12.446,12.05L0.899,13.221c-0.394,0.04-0.728,0.312-0.85,0.688c-0.123,0.377-0.011,0.791,0.285,1.055
		l8.652,7.738L6.533,34.045c-0.083,0.387,0.069,0.787,0.39,1.02c0.175,0.127,0.381,0.191,0.588,0.191
		c0.173,0,0.347-0.045,0.503-0.137l10.032-5.84l10.03,5.84c0.342,0.197,0.77,0.178,1.091-0.059c0.32-0.229,0.474-0.633,0.391-1.02
		l-2.453-11.344l8.653-7.737C36.052,14.699,36.165,14.285,36.042,13.909z M25.336,21.598c-0.268,0.24-0.387,0.605-0.311,0.957
		l2.097,9.695l-8.574-4.99c-0.311-0.182-0.695-0.182-1.006,0l-8.576,4.99l2.097-9.695c0.076-0.352-0.043-0.717-0.311-0.957
		l-7.396-6.613l9.87-1.002c0.358-0.035,0.668-0.264,0.814-0.592l4.004-9.077l4.003,9.077c0.146,0.328,0.456,0.557,0.814,0.592
		l9.87,1.002L25.336,21.598z'
                            />
                        </svg>
                    </button>
                    <button
                        className='card-film__later'
                        type='button'
                        onClick={handleToggleLaterFilm}
                    >
                        <svg width='20px' height='20px' viewBox='0 0 24 24' fill='none'>
                            <path
                                d='M5 22V3C5 2.44772 5.44772 2 6 2H18C18.5523 2 19 2.44772 19 3V22L12 15.8889L5 22Z'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                        </svg>
                    </button>
                </div>
                <h3 className='card-film__title'>{title}</h3>
                <footer className='card-film__footer'>
                    <a href='/' className='card-film__more'>
                        Подробнее
                    </a>
                </footer>
            </div>
        </article>
    );
};

export default CardFilm;

import React, { FC, memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./card.module.scss";
import useTypedSelector from "@/hooks/redux";
import { setActiveLoginModal } from "@/store/actions/modalActions";
import { toggleFavoriteFilm, toggleLaterFilm } from "@/store/actions/userChoiceActions";
import { ReactComponent as SaveIcon } from "@/assets/save.svg";
import { ReactComponent as StarIcon } from "@/assets/star.svg";
import { selectAuth } from "@/store/selectors";
import { ICardFilm } from "@/types/films";
import { updateUserChoicesFilms } from "./utils";

const CardFilm = memo(({ poster_path: img, vote_average: rating, title, id }: ICardFilm) => {
    const auth = useTypedSelector(selectAuth);
    const isFilmInFavorite = useTypedSelector(({ userChoice }) =>
        userChoice.favoritesFilms.includes(id),
    );
    const isFilmInLater = useTypedSelector(({ userChoice }) => userChoice.laterFilms.includes(id));
    const dispatch = useDispatch();

    const handleToggleLaterFilm = useCallback(() => {
        if (!auth) {
            dispatch(setActiveLoginModal());
        }
        dispatch(toggleLaterFilm(id));
        updateUserChoicesFilms(id, "LaterFilms", isFilmInLater);
    }, [auth, dispatch, id, isFilmInLater]);

    const handleToggleFavoriteFilm = useCallback(() => {
        if (!auth) {
            dispatch(setActiveLoginModal());
        }
        dispatch(toggleFavoriteFilm(id));
        updateUserChoicesFilms(id, "FavoriteFilms", isFilmInFavorite);
    }, [auth, dispatch, id, isFilmInFavorite]);

    return (
        <article className={styles.card}>
            <Link to={`film/${id}`} className={styles.card__img}>
                <img src={`https://image.tmdb.org/t/p/w300/${img}`} alt='' />
            </Link>
            <div className={styles.card__info}>
                <div className={styles.card__actions}>
                    <span className={styles.card__rating}>
                        Рейтинг: <span>{rating}</span>
                    </span>
                    <button
                        className={styles.card__favorites}
                        type='button'
                        onClick={handleToggleFavoriteFilm}
                    >
                        <StarIcon width='20px' height='20px' />
                    </button>
                    <button
                        className={styles.card__later}
                        type='button'
                        onClick={handleToggleLaterFilm}
                    >
                        <SaveIcon width='20px' height='20px' />
                    </button>
                </div>
                <h3 className={styles.card__title}>{title}</h3>
                <footer>
                    <Link to={`/film/${id}`} className={styles.card__more}>
                        Подробнее
                    </Link>
                </footer>
            </div>
        </article>
    );
});

export { CardFilm };

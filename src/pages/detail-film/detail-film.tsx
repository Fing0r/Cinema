import React, { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import filmsData from "@/api/filmsData";
import { getYear } from "@/utils/utils";
import styles from "./detail-film.module.scss";
import getGenresList from "./utils/get-genres-list";

const DetailFilm: FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const goHome = () => navigate("/", { replace: true });
    const film = filmsData.find((item) => item.id === Number(id));

    useEffect(() => {
        if (!film) goHome();
    }, []);

    if (!film) return null;
    const genresList = getGenresList(film).join(", ");

    return (
        <div
            className={styles.film}
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/w500/${film.backdrop_path}")`,
            }}
        >
            <div className='container'>
                <div className={styles.film__wrapper}>
                    <img
                        className={styles.film__img}
                        src={`https://image.tmdb.org/t/p/w300/${film.poster_path}`}
                        alt=''
                    />
                    <div className={styles.film__info}>
                        <h1 className={styles.film__title}>{film.title}</h1>
                        <div className={styles.film__detail}>
                            <span className={styles.film__rating}>
                                Кинопоиск: {film.vote_average}
                            </span>
                            <span className={styles.film__release}>
                                {getYear(film.release_date)}
                            </span>
                        </div>
                        <div className={styles.film__genres}>{genresList}</div>
                        <div className={styles.film__descr}>
                            <p>{film.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { DetailFilm };

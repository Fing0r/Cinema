import React, { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Box } from "@mui/material/";
import filmsData from "@/shared/api/filmsData";
import { getYear } from "@/shared/utils/utils";
import styles from "./detail-film.module.scss";
import { getPoster, getGenresList } from "./utils";
import { RoutesEnum } from "@/shared/constants/routes";

const DetailFilm: FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const goHome = () => navigate(RoutesEnum.Home, { replace: true });
    const film = filmsData.find((item) => item.id === Number(id));

    useEffect(() => {
        if (!film) goHome();
    }, []);

    if (!film) return null;

    const genresList = getGenresList(film).join(", ");
    const filmYear = getYear(film.release_date);
    const filmPoster = getPoster(film.poster_path);

    return (
        <Box
            sx={{
                backgroundImage: `url("https://image.tmdb.org/t/p/w500/${film.backdrop_path}")`,
                backgroundRepeat: "no-repeat",
                backgroundColor: "rgba(41, 41, 41, 0.7)",
                backgroundBlendMode: "multiply",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Container maxWidth='lg'>
                <div className={styles.film__wrapper}>
                    <img className={styles.film__img} src={filmPoster} alt='' />
                    <div className={styles.film__info}>
                        <h1 className={styles.film__title}>{film.title}</h1>
                        <div className={styles.film__detail}>
                            <span className={styles.film__rating}>
                                Кинопоиск: {film.vote_average}
                            </span>
                            <span className={styles.film__release}>{filmYear}</span>
                        </div>
                        <div className={styles.film__genres}>{genresList}</div>
                        <div className={styles.film__descr}>
                            <p>{film.overview}</p>
                        </div>
                    </div>
                </div>
            </Container>
        </Box>
    );
};

export { DetailFilm };

import React, { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Films from "@/api/Films";

const DetailFilm: FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const goHome = () => navigate("/", { replace: true });
    const film = Films.find((item) => item.id === Number(id));
    console.log("=> film", film);

    useEffect(() => {
        if (!film) goHome();
    }, []);

    if (!film) return null;

    return (
        <div
            className='film-page'
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/w500/${film.backdrop_path}")`,
            }}
        >
            <div className='container'>
                <div className='film-page__wrapper'>
                    <img
                        className='film-page__img'
                        src={`https://image.tmdb.org/t/p/w300/${film.poster_path}`}
                        alt=''
                    />
                    <div className='film-page__info'>
                        <h1 className='film-page__title'>{film.title}</h1>
                        <span className='film-page__rating'>Рейтинг: {film.vote_average}</span>
                        <div className='film-page__descr'>
                            <p>{film.overview}</p>
                        </div>
                        <span className='film-page__release'>Дата выхода: {film.release_date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailFilm;

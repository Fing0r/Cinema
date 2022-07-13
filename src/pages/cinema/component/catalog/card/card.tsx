import React, { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { NavLink } from "react-router-dom";
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    IconButton,
    Link,
} from "@mui/material";
import useTypedSelector from "@/hooks/redux";
import { setActiveLoginModal } from "@/store/actions/modalActions";
import { toggleFavoriteFilm, toggleLaterFilm } from "@/store/actions/userChoiceActions";
import { selectAuth } from "@/store/selectors";
import { updateUserChoicesFilms } from "./utils";
import { ICardFilm } from "@/types/films";
import { cardContentStyle, cardStyle, cardLinkStyle } from "./styles";

const CardFilm = memo(
    ({ className, poster_path: img, vote_average: rating, title, id }: ICardFilm) => {
        const auth = useTypedSelector(selectAuth);
        const isFilmInFavorite = useTypedSelector(({ userChoice }) =>
            userChoice.favoritesFilms.includes(id),
        );
        const isFilmInLater = useTypedSelector(({ userChoice }) =>
            userChoice.laterFilms.includes(id),
        );
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
            <Card className={`${className}`} sx={cardStyle}>
                <CardMedia
                    component='img'
                    image={`https://image.tmdb.org/t/p/w300/${img}`}
                    alt=''
                    sx={{ width: "11.25rem" }}
                />
                <CardContent sx={cardContentStyle}>
                    <CardActions
                        sx={{
                            p: "0.8125rem",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Typography variant='caption' width='100%' fontSize='1rem'>
                            Рейтинг: {rating}
                        </Typography>
                        <IconButton
                            color='default'
                            onClick={handleToggleFavoriteFilm}
                            sx={{
                                position: "relative",
                                zIndex: 1,
                            }}
                        >
                            <StarBorderIcon />
                        </IconButton>
                        <IconButton
                            color='default'
                            onClick={handleToggleLaterFilm}
                            sx={{
                                position: "relative",
                                zIndex: 1,
                            }}
                        >
                            <BookmarkBorderIcon />
                        </IconButton>
                    </CardActions>
                    <Typography
                        component='h3'
                        variant='h6'
                        p='0.8125rem'
                        flexBasis='100%'
                        fontSize='1.125rem'
                        fontWeight='700'
                        borderBottom='2px solid #c5c5c5'
                    >
                        {title}
                    </Typography>

                    <Link
                        p='1.25rem'
                        display='block'
                        width='100%'
                        color='inherit'
                        component={NavLink}
                        to={`/film/${id}`}
                        sx={cardLinkStyle}
                    >
                        Подробнее
                    </Link>
                </CardContent>
            </Card>
        );
    },
);

export { CardFilm };

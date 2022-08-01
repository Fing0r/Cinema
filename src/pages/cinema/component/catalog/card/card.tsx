import { memo } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardActions, CardContent, CardMedia, Link, Typography } from "@mui/material";
import { ICardFilm } from "@/types/films";
import { cardContentStyle, cardLinkStyle, cardStyle } from "./styles";
import { FavoriteButton } from "@/pages/cinema/component/catalog/card/favorite-button";
import { LaterButton } from "@/pages/cinema/component/catalog/card/later-button";

const CardFilm = memo(
    ({ className, poster_path: img, vote_average: rating, title, id }: ICardFilm) => {
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
                            zIndex: 3,
                        }}
                    >
                        <Typography variant='caption' width='100%' fontSize='1rem'>
                            Рейтинг: {rating}
                        </Typography>
                        <FavoriteButton id={id} />
                        <LaterButton id={id} />
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

import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FC } from "react";
import { ICardFilm } from "@/types/films";

interface SearchCardProps {}

const SearchCard: FC<SearchCardProps> = ({
    poster_path: img,
    vote_average: rating,
    title,
    id,
    overview,
}: ICardFilm) => {
    return (
        <Card
            sx={{
                width: "100%",
                border: "transparent",
                display: "flex",
                boxShadow: "none",
            }}
        >
            <CardMedia
                sx={{
                    padding: 0,
                    flex: "1 1 30%",
                    display: "flex",
                    flexDirection: "column",
                    "&:last-child": {
                        padding: 0,
                    },
                }}
                component='img'
                image={`https://image.tmdb.org/t/p/w300/${img}`}
                alt='green iguana'
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {overview}
                </Typography>
            </CardContent>
        </Card>
    );
};

export { SearchCard };

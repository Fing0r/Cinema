import { FC, memo, useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import styles from "../search.module.scss";
import { CardFilm } from "@/pages/cinema/component/catalog/card";
import useSearchFilms from "@/shared/hooks/useSearchFilms";
import { SearchCard } from "../search-card";

const SearchResult: FC = memo(() => {
    const [numberFilm, setNumberFilm] = useState(0);
    const films = useSearchFilms();

    const handleClick = useCallback(() => {
        setNumberFilm((prv) => prv + 1);
    }, []);

    const filmData = useMemo(() => ({ ...films[numberFilm] }), [films, numberFilm]);
    const filmPath = `/film/${filmData.id}`;

    if (!films.length) return <span>Фильмов не найдено</span>;
    if (!!films.length && !filmData.id) return <span>Фильмов нет</span>;

    return (
        <>
            <Box>
                <SearchCard {...filmData} />
                {/* <CardFilm className={styles.search__card} {...filmData} /> */}
            </Box>

            <Box
                display='grid'
                gap='1rem'
                gridTemplateColumns={{ sm: "repeat(auto-fit, minmax(300px, 1fr))" }}
                marginTop='1.5rem'
            >
                <Button fullWidth onClick={handleClick} variant='contained' color='info'>
                    Следующий фильм
                </Button>
                <Button
                    component={Link}
                    to={filmPath}
                    fullWidth
                    onClick={handleClick}
                    variant='contained'
                    color='success'
                >
                    Выбрать фильм
                </Button>
            </Box>
        </>
    );
});

export { SearchResult };

import { memo } from "react";
import { Box, Grid, List, ListItem } from "@mui/material";
import { CardFilm } from "./card";
import { IFilm } from "@/types/films";
import useCurrentPageFilms from "@/shared/hooks/useCurrentPageFilms";

const CatalogCinema = memo(({ filteredFilms }: { filteredFilms: IFilm[] }) => {
    const currentPageFilms = useCurrentPageFilms(filteredFilms);

    return (
        <Box flex='1 1 100%' component='section'>
            <Grid
                component={List}
                gridTemplateColumns='repeat(auto-fit, minmax(21.875rem, 1fr))'
                gap='1.5625rem'
                display='grid'
                p={0}
            >
                {currentPageFilms.map((item) => (
                    <ListItem disablePadding key={item.id}>
                        <CardFilm {...item} />
                    </ListItem>
                ))}
                {currentPageFilms.length === 1 && <li />}
            </Grid>
        </Box>
    );
});

export { CatalogCinema };

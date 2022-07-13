import { memo } from "react";
import { Box, Grid, List, ListItem } from "@mui/material";
import { CardFilm } from "./card";
import useTypedSelector from "@/hooks/redux";
import { getPositionItems } from "@/utils/utils";
import { selectPage } from "@/store/selectors";
import { IFilm } from "@/types/films";

const CatalogCinema = memo(({ filteredFilms }: { filteredFilms: IFilm[] }) => {
    const page = useTypedSelector(selectPage);

    if (!filteredFilms.length) return null;

    const filmItems = filteredFilms.slice(...getPositionItems(page)).map((item) => (
        <ListItem disablePadding key={item.id}>
            <CardFilm {...item} />
        </ListItem>
    ));

    return (
        <Box flex='1 1 100%' component='section'>
            <Grid
                component={List}
                gridTemplateColumns='repeat(auto-fit, minmax(21.875rem, 1fr))'
                gap='1.5625rem'
                display='grid'
                p={0}
            >
                {filmItems}
                {filteredFilms.length === 1 && <li />}
            </Grid>
        </Box>
    );
});

export { CatalogCinema };

import { FC, memo } from "react";
import "./cinema.scss";
import { Box, Container } from "@mui/material/";
import { FiltersCinema } from "./component/filters";
import { CatalogCinema } from "./component/catalog";
import useTypedSelector from "@/shared/hooks/redux";
import { selectFilteredFilms } from "@/store/selectors";

const Cinema: FC = memo(() => {
    const filteredFilms = useTypedSelector(selectFilteredFilms);

    return (
        <Box p='1.875rem 0' position='relative'>
            <Container maxWidth='lg'>
                <Box display='flex' gap='1.875rem'>
                    <FiltersCinema filmCount={filteredFilms.length} />
                    <CatalogCinema filteredFilms={filteredFilms} />
                </Box>
            </Container>
        </Box>
    );
});

export { Cinema };

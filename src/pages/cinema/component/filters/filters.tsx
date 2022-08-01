import React, { memo } from "react";
import { Box, Typography, Button } from "@mui/material";
import { PaginationFilms } from "./pagination";
import { SelectBySorted } from "./select-by-sorted";
import { SelectByYear } from "./select-by-year";
import { CheckboxesByGenres } from "./checkboxes-by-genres";
import { SelectByUserChoice } from "./select-by-user-choice";
import { useActions } from "@/shared/hooks/useActions";
import { UserChoiceEnum } from "@/shared/settings/config";

const FiltersCinema = memo((props: { filmCount: number }) => {
    const { clearFilters, setFilteredByUserChoice } = useActions();

    const handleClick = () => {
        clearFilters();
        setFilteredByUserChoice(UserChoiceEnum.DEFAULT);
    };

    return (
        <Box
            component='section'
            maxWidth='15.625rem'
            borderRadius='5px'
            boxShadow='0 10px 40px rgb(0 0 0 / 30%)'
            p='1.25rem'
            height='fit-content'
        >
            <Typography variant='h5' component='h2' fontWeight={700} mb='1rem'>
                Фильтры
            </Typography>
            <Button
                onClick={handleClick}
                variant='contained'
                color='secondary'
                size='small'
                fullWidth
                sx={{ textTransform: "unset", marginBottom: "0.75rem", fontSize: "1rem" }}
            >
                Сбросить все фильтры
            </Button>
            <SelectByUserChoice />
            <SelectBySorted />
            <SelectByYear />
            <CheckboxesByGenres />
            <PaginationFilms {...props} />
        </Box>
    );
});

export { FiltersCinema };

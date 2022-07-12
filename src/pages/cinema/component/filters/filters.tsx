import { memo } from "react";
import { useDispatch } from "react-redux";
import Button from "@/ui/button";
import { PaginationFilms } from "./pagination";
import { clearFilters } from "@/store/actions/filtersActions";
import { SelectBySorted } from "./select-by-sorted";
import { SelectByYear } from "./select-by-year";
import { CheckboxesByGenres } from "./checkboxes-by-genres";
import { SelectByUserChoice } from "./select-by-user-choice";

const FiltersCinema = memo((props: { filmCount: number }) => {
    const dispatch = useDispatch();

    const handleClick = () => dispatch(clearFilters());

    return (
        <section className='cinema__filters filters'>
            <h2 className='filters__title'>Фильтры</h2>
            <Button className='filters__reset' type='button' onClick={handleClick}>
                Сбросить все фильтры
            </Button>
            <SelectByUserChoice />
            <SelectBySorted />
            <SelectByYear />
            <CheckboxesByGenres />
            <PaginationFilms {...props} />
        </section>
    );
});

export { FiltersCinema };

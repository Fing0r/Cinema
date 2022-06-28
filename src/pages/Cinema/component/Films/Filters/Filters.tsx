import { FC } from "react";
import { useDispatch } from "react-redux";
import Button from "@/UI/Button";
import PaginationFilms from "./Pagination/Pagination";
import { clearFilters } from "@/store/actions/filtersActions";
import SelectBySorted from "./SelectBySorted/SelectBySorted";
import SelectByYear from "./SelectByYear/SelectByYear";
import CheckboxesByGenres from "./CheckboxesByGenres/CheckboxesByGenres";
import SelectByUserChoice from "./SelectByUserChoice/SelectByUserChoice";

const FiltersCinema: FC = () => {
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
            <PaginationFilms />
        </section>
    );
};

export default FiltersCinema;

import { useDispatch } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import useTypedSelector from "@/hooks/redux";
import { setCurrentPage, setFilteredByYear } from "@/store/actions/filtersActions";
import { DEFAULT_FILTERS, yearOptionsData } from "@/settings/config";

const SelectByYear = () => {
    const year = useTypedSelector(({ filters }) => filters.year);
    const dispatch = useDispatch();

    const handleSelectYear = (e: SelectChangeEvent) => {
        const { value } = e.target;
        dispatch(setFilteredByYear(value));
        dispatch(setCurrentPage(DEFAULT_FILTERS.PAGE));
    };

    const optionItems = yearOptionsData.map(({ title, value }) => (
        <MenuItem key={value} value={value}>
            {title}
        </MenuItem>
    ));

    return (
        <>
            <InputLabel id='year'>Год релиза</InputLabel>
            <Select
                className='filters__release'
                labelId='year'
                id='year'
                onChange={handleSelectYear}
                value={String(year)}
            >
                {optionItems}
            </Select>
        </>
    );
};

export default SelectByYear;

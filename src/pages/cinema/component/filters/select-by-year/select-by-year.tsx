import { useDispatch } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { memo } from "react";
import useTypedSelector from "@/hooks/redux";
import { setCurrentPage, setFilteredByYear } from "@/store/actions/filtersActions";
import { DEFAULT_FILTERS, yearOptionsData } from "@/settings/config";
import { selectYear } from "@/store/selectors";

const SelectByYear = memo(() => {
    const year = useTypedSelector(selectYear);
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
                fullWidth
                size='small'
                labelId='year'
                id='year'
                onChange={handleSelectYear}
                value={String(year)}
                sx={{ marginBottom: "0.75rem" }}
            >
                {optionItems}
            </Select>
        </>
    );
});

export { SelectByYear };

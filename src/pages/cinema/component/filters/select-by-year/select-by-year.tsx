import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { memo } from "react";
import useTypedSelector from "@/shared/hooks/redux";
import { DEFAULT_FILTERS, yearOptionsData } from "@/shared/settings/config";
import { selectYear } from "@/store/selectors";
import { useActions } from "@/shared/hooks/useActions";

const SelectByYear = memo(() => {
    const year = useTypedSelector(selectYear);
    const { setFilteredByYear, setCurrentPage } = useActions();

    const handleSelectYear = (e: SelectChangeEvent) => {
        const value = parseInt(e.target.value, 10);
        setFilteredByYear(value);
        setCurrentPage(DEFAULT_FILTERS.PAGE);
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

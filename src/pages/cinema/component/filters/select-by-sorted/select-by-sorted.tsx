import { useDispatch } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { memo } from "react";
import useTypedSelector from "@/hooks/redux";
import { setSorted } from "@/store/actions/filtersActions";
import { sortOptionsData } from "@/settings/config";
import { selectSort } from "@/store/selectors";

const SelectBySorted = memo(() => {
    const sort = useTypedSelector(selectSort);
    const dispatch = useDispatch();

    const handleSelectSort = (e: SelectChangeEvent) => {
        const { value } = e.target;
        dispatch(setSorted(value));
    };

    const optionItems = sortOptionsData.map(({ title, value }) => (
        <MenuItem key={value} value={value}>
            {title}
        </MenuItem>
    ));

    return (
        <>
            <InputLabel id='year'>Сортировать по</InputLabel>
            <Select
                fullWidth
                size='small'
                labelId='sort'
                id='sort'
                onChange={handleSelectSort}
                value={String(sort)}
                sx={{ marginBottom: "0.75rem" }}
            >
                {optionItems}
            </Select>
        </>
    );
});

export { SelectBySorted };

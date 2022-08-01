import { useDispatch } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { memo } from "react";
import useTypedSelector from "@/shared/hooks/redux";
import { sortOptionsData } from "@/shared/settings/config";
import { selectSort } from "@/store/selectors";
import { useActions } from "@/shared/hooks/useActions";

const SelectBySorted = memo(() => {
    const sort = useTypedSelector(selectSort);
    const { setSorted } = useActions();

    const handleSelectSort = (e: SelectChangeEvent) => {
        const { value } = e.target;
        setSorted(value);
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

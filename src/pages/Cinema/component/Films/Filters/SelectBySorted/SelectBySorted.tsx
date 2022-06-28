import { useDispatch } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import useTypedSelector from "@/hooks/redux";
import { setSorted } from "@/store/actions/filtersActions";
import { sortOptionsData } from "@/settings/config";

const SelectBySorted = () => {
    // TODO: Незнаю почему, но при деструктуризации { sort } рендер компонента происходит кажый раз, когда я меняю значения другого селекта или чекбоксос
    const sort = useTypedSelector(({ filters }) => filters.sort);
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
                className='filters__sort'
                labelId='sort'
                id='sort'
                onChange={handleSelectSort}
                value={String(sort)}
            >
                {optionItems}
            </Select>
        </>
    );
};

export default SelectBySorted;

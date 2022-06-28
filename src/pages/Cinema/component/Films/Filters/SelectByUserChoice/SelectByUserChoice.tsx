import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import useTypedSelector from "@/hooks/redux";
import { DEFAULT_FILTERS, userOptionsChoiceData } from "@/settings/config";
import { setFilteredByUserChoice } from "@/store/actions/userChoiceActions";
import { setCurrentPage } from "@/store/actions/filtersActions";

const SelectByUserChoice = () => {
    const { auth } = useTypedSelector(({ auth }) => auth);
    const userChoice = useTypedSelector(({ userChoice }) => userChoice.userChoice);
    const dispatch = useDispatch();

    const handleSelectUserChoice = (e: SelectChangeEvent) => {
        const { value } = e.target;
        dispatch(setFilteredByUserChoice(value));
        dispatch(setCurrentPage(DEFAULT_FILTERS.PAGE));
    };

    if (!auth) return null;

    const optionItems = userOptionsChoiceData.map(({ title, value }) => (
        <MenuItem key={value} value={value}>
            {title}
        </MenuItem>
    ));

    return (
        <>
            <InputLabel id='choice'>Выбор пользователя</InputLabel>
            <Select
                className='filters__sort'
                labelId='choice'
                id='choice'
                value={userChoice}
                onChange={handleSelectUserChoice}
            >
                {optionItems}
            </Select>
        </>
    );
};

export default SelectByUserChoice;

import { SelectChangeEvent } from "@mui/material/Select";
import { MenuItem, Select, InputLabel } from "@mui/material/";
import { useDispatch } from "react-redux";
import { memo } from "react";
import useTypedSelector from "@/hooks/redux";
import { DEFAULT_FILTERS, userOptionsChoiceData } from "@/settings/config";
import { setFilteredByUserChoice } from "@/store/actions/userChoiceActions";
import { setCurrentPage } from "@/store/actions/filtersActions";
import { selectActiveUserChoice, selectAuth } from "@/store/selectors";

const SelectByUserChoice = memo(() => {
    const auth = useTypedSelector(selectAuth);
    const userChoice = useTypedSelector(selectActiveUserChoice);
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
                fullWidth
                size='small'
                labelId='choice'
                id='choice'
                value={userChoice}
                onChange={handleSelectUserChoice}
                sx={{ marginBottom: "0.75rem" }}
            >
                {optionItems}
            </Select>
        </>
    );
});

export { SelectByUserChoice };

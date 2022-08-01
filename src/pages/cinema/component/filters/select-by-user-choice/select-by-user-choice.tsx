import { SelectChangeEvent } from "@mui/material/Select";
import { MenuItem, Select, InputLabel } from "@mui/material/";
import { memo } from "react";
import useTypedSelector from "@/shared/hooks/redux";
import { DEFAULT_FILTERS, userOptionsChoiceData } from "@/shared/settings/config";
import { selectActiveUserChoice, selectAuth } from "@/store/selectors";
import { useActions } from "@/shared/hooks/useActions";

const SelectByUserChoice = memo(() => {
    const auth = useTypedSelector(selectAuth);
    const userChoice = useTypedSelector(selectActiveUserChoice);
    const { setFilteredByUserChoice, setCurrentPage } = useActions();

    const handleSelectUserChoice = (e: SelectChangeEvent) => {
        const { value } = e.target;
        setFilteredByUserChoice(value);
        setCurrentPage(DEFAULT_FILTERS.PAGE);
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

import { FC } from "react";
import { Checkbox as Check, FormControlLabel } from "@mui/material";
import { ICheckbox } from "@/types/ui";
import useTypedSelector from "@/shared/hooks/redux";
import { DEFAULT_FILTERS } from "@/shared/settings/config";
import { useActions } from "@/shared/hooks/useActions";

const Checkbox: FC<ICheckbox> = ({ name, id }) => {
    const isChecked = useTypedSelector(({ filters }) => filters.selectedGenres.includes(id));
    const { toggleGenre, setCurrentPage } = useActions();

    const onChange = () => {
        toggleGenre(id);
        setCurrentPage(DEFAULT_FILTERS.PAGE);
    };

    return (
        <FormControlLabel
            sx={{ width: "100%" }}
            control={<Check checked={isChecked} onChange={onChange} size='small' />}
            label={name}
        />
    );
};

export { Checkbox };

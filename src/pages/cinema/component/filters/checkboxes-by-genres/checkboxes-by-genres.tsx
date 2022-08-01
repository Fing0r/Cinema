import { FC, memo } from "react";
import { FormGroup } from "@mui/material";
import filtersData from "@/shared/api/filtersGenresData";
import { Checkbox } from "./checkbox";
import { ICheckboxesByGenres } from "@/types/ui";

const CheckboxesByGenres: FC<ICheckboxesByGenres> = memo(({ styleSX }) => {
    return (
        <FormGroup sx={{ marginBottom: "0.75rem", ...styleSX }}>
            {filtersData.map(({ name, id }) => (
                <Checkbox name={name} key={id} id={id} />
            ))}
        </FormGroup>
    );
});

export { CheckboxesByGenres };

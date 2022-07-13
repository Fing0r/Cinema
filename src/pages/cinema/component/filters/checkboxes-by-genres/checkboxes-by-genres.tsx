import { FC, memo } from "react";
import { FormGroup } from "@mui/material";
import filtersData from "@/api/filtersGenresData";
import { Checkbox } from "./checkbox";
import { ICheckboxesByGenres } from "@/types/UI";

const CheckboxesByGenres: FC<ICheckboxesByGenres> = memo(() => {
    return (
        <FormGroup sx={{ marginBottom: "0.75rem" }}>
            {filtersData.map(({ name, id }) => (
                <Checkbox name={name} key={id} id={id} />
            ))}
        </FormGroup>
    );
});

export { CheckboxesByGenres };

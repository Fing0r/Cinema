import { FC, memo } from "react";
import filtersData from "@/api/filtersGenresData";
import { Checkbox } from "./checkbox";
import { ICheckboxesByGenres } from "@/types/UI";

const CheckboxesByGenres: FC<ICheckboxesByGenres> = memo(({ title }: ICheckboxesByGenres) => {
    return (
        <fieldset className='filters__genre'>
            {title && <legend>{title}</legend>}
            {filtersData.map(({ name, id }) => (
                <Checkbox name={name} key={id} id={id} />
            ))}
        </fieldset>
    );
});

export { CheckboxesByGenres };

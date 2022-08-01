import { Dispatch, FC, SetStateAction } from "react";
import { Button } from "@mui/material";
import { CheckboxesByGenres } from "@/pages/cinema/component/filters/checkboxes-by-genres";
import { SEARCH_BLOCK } from "@/shared/settings/config";

interface GenresStepProps {
    handleClick: Dispatch<SetStateAction<string>>;
}

const style = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
};

const GenresStep: FC<GenresStepProps> = ({ handleClick }) => {
    const onClick = () => {
        handleClick(SEARCH_BLOCK.RATING);
    };

    return (
        <>
            <CheckboxesByGenres title='Выберите жанр' styleSX={style} />
            <Button fullWidth onClick={onClick} variant='contained' color='info'>
                Дальше
            </Button>
        </>
    );
};

export { GenresStep };

import { ChangeEventHandler, Dispatch, FC, memo, SetStateAction, useCallback } from "react";
import { Button } from "@mui/material";
import { RadioButtons } from "@/shared/ui/radio-buttons";
import styles from "@/pages/search/search.module.scss";
import { ratingRadioBtnData, SEARCH_BLOCK } from "@/shared/settings/config";
import { useActions } from "@/shared/hooks/useActions";
import useTypedSelector from "@/shared/hooks/redux";
import { selectSearchRating } from "@/store/selectors";

interface RatingStepProps {
    handleClick: Dispatch<SetStateAction<string>>;
}

const RatingStep: FC<RatingStepProps> = memo(({ handleClick }) => {
    const { setSearchRating } = useActions();
    const rating = useTypedSelector(selectSearchRating);

    const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
        (e) => {
            const { value } = e.target;
            setSearchRating(value);
        },
        [setSearchRating],
    );

    const onClick = useCallback(() => handleClick(SEARCH_BLOCK.POPULAR), [handleClick]);

    return (
        <>
            <RadioButtons
                className={styles.search__fieldset}
                title='Выберите оценку фильма'
                radioBtnData={ratingRadioBtnData}
                name='rating'
                handleChange={handleChange}
            />
            <Button fullWidth onClick={onClick} variant='contained' color='info' disabled={!rating}>
                Дальше
            </Button>
        </>
    );
});

export { RatingStep };

import React, { ChangeEventHandler, Dispatch, FC, memo, SetStateAction, useCallback } from "react";
import { Button } from "@mui/material";
import { RadioButtons } from "@/shared/ui/radio-buttons";
import styles from "@/pages/search/search.module.scss";
import { popularRadioBtnData, SEARCH_BLOCK } from "@/shared/settings/config";
import { useActions } from "@/shared/hooks/useActions";
import useTypedSelector from "@/shared/hooks/redux";
import { selectSearchPopular } from "@/store/selectors";

interface PopularStepProps {
    handleClick: Dispatch<SetStateAction<string>>;
}

const PopularStep: FC<PopularStepProps> = memo(({ handleClick }) => {
    const { setSearchPopular } = useActions();
    const popularity = useTypedSelector(selectSearchPopular);

    const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
        (e) => {
            const { value } = e.target;
            setSearchPopular(value);
        },
        [setSearchPopular],
    );

    const onClick = useCallback(() => handleClick(SEARCH_BLOCK.FILM), [handleClick]);

    return (
        <>
            <RadioButtons
                className={styles.search__fieldset}
                title='Выберите популярность фильма'
                radioBtnData={popularRadioBtnData}
                name='popular'
                handleChange={handleChange}
            />
            <Button
                fullWidth
                onClick={onClick}
                variant='contained'
                color='info'
                disabled={!popularity}
            >
                Получить фильм
            </Button>
        </>
    );
});

export { PopularStep };

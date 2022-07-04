import { FC } from "react";
import { useDispatch } from "react-redux";
import { ICheckbox } from "@/types/UI";
import { toggleGenre, setCurrentPage } from "@/store/actions/filtersActions";
import useTypedSelector from "@/hooks/redux";
import { DEFAULT_FILTERS } from "@/settings/config";

const Checkbox: FC<ICheckbox> = ({ name, id, children }) => {
    const isChecked = useTypedSelector(({ filters }) => filters.selectedGenres.includes(id));
    const dispatch = useDispatch();

    const onChange = () => {
        dispatch(toggleGenre(id));
        dispatch(setCurrentPage(DEFAULT_FILTERS.PAGE));
    };

    return (
        <label className='checkbox'>
            <input
                className='checkbox__field'
                type='checkbox'
                checked={isChecked}
                onChange={onChange}
            />
            <span className='checkbox__content' />
            {name && <span className='checkbox__text'>{name}</span>}
            {children}
        </label>
    );
};

export { Checkbox };

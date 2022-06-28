import { FC } from "react";
import { useDispatch } from "react-redux";
import Button from "@/UI/Button";
import useTypedSelector from "@/hooks/redux";
import { setCurrentPage } from "@/store/actions/filtersActions";
import useFiltered from "@/hooks/useFiltered";

const PaginationFilms: FC = () => {
    const filteredFilms = useFiltered();
    const page = useTypedSelector(({ filters }) => filters.page);
    const dispatch = useDispatch();

    const changePage = (newPage: number) => dispatch(setCurrentPage(newPage));

    const totalPage = Math.ceil(filteredFilms.length / 10);

    return (
        <div className='filters__pagination pagination'>
            <Button
                onClick={() => changePage(page - 1)}
                className='pagination__btn pagination__btn--prev'
                type='button'
                disabled={page < 2}
            >
                Назад
            </Button>
            <Button
                onClick={() => changePage(page + 1)}
                className='pagination__btn pagination__btn--next btn'
                type='button'
                disabled={totalPage < 2 || totalPage === page}
            >
                Вперед
            </Button>
            <div className='pagination__pages'>
                <span className='pagination__curr'>{totalPage ? page : 0}</span> of{" "}
                <span className='pagination__total'>{totalPage}</span>
            </div>
        </div>
    );
};

export default PaginationFilms;

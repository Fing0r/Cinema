import { memo } from "react";
import { useDispatch } from "react-redux";
import Button from "@/ui/button";
import useTypedSelector from "@/hooks/redux";
import { setCurrentPage } from "@/store/actions/filtersActions";
import { selectPage } from "@/store/selectors";

const PaginationFilms = memo(({ filmCount }: { filmCount: number }) => {
    const page = useTypedSelector(selectPage);
    const dispatch = useDispatch();

    const changePage = (newPage: number) => dispatch(setCurrentPage(newPage));

    const totalPage = Math.ceil(filmCount / 10);

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
});

export { PaginationFilms };

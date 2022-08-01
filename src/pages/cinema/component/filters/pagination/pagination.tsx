import { memo } from "react";
import Button from "@/shared/ui/button";
import useTypedSelector from "@/shared/hooks/redux";
import { selectPage } from "@/store/selectors";
import { useActions } from "@/shared/hooks/useActions";

const PaginationFilms = memo(({ filmCount }: { filmCount: number }) => {
    const page = useTypedSelector(selectPage);
    const { setCurrentPage } = useActions();

    const changePage = (newPage: number) => setCurrentPage(newPage);

    const totalPage = Math.ceil(filmCount / 10);
    const currentPage = totalPage ? page : 0;
    const isDisabledPrev = page < 2;
    const isDisabledNext = totalPage < 2 || totalPage === page;

    return (
        <div className='filters__pagination pagination'>
            <Button
                onClick={() => changePage(page - 1)}
                className='pagination__btn pagination__btn--prev'
                type='button'
                disabled={isDisabledPrev}
            >
                Назад
            </Button>
            <Button
                onClick={() => changePage(page + 1)}
                className='pagination__btn pagination__btn--next btn'
                type='button'
                disabled={isDisabledNext}
            >
                Вперед
            </Button>
            <div className='pagination__pages'>
                <span className='pagination__curr'>{currentPage}</span> of{" "}
                <span className='pagination__total'>{totalPage}</span>
            </div>
        </div>
    );
});

export { PaginationFilms };

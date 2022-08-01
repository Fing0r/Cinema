import { useMemo } from "react";
import { IFilm } from "@/types/films";
import useTypedSelector from "@/shared/hooks/redux";
import { selectPage } from "@/store/selectors";
import { getCurrentPageFilms } from "@/pages/cinema/component/catalog/utils";

function useCurrentPageFilms(films: IFilm[]) {
    const page = useTypedSelector(selectPage);

    return useMemo(() => {
        return getCurrentPageFilms(page, films);
    }, [films, page]);
}

export default useCurrentPageFilms;

import { useEffect, useState } from "react";
import { IFilm } from "@/types/films";
import useTypedSelector from "@/shared/hooks/redux";
import { selectGenres, selectSearchPopular, selectSearchRating } from "@/store/selectors";
import { getFilterFilm } from "@/pages/search/utils";

function useSearchFilms() {
    const [films, setFilms] = useState<IFilm[]>([]);

    const genres = useTypedSelector(selectGenres);
    const rating = useTypedSelector(selectSearchRating);
    const popularity = useTypedSelector(selectSearchPopular);

    useEffect(() => {
        setFilms(() => [...getFilterFilm(genres, rating, popularity)]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return films;
}

export default useSearchFilms;

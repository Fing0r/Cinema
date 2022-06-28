import useTypedSelector from "@/hooks/redux";
import { filterByGenres, filterByYear, getSort } from "@/utils/filtration";
import Films from "@/api/Films";
import useGetUserChoiceFilms from "@/hooks/useGetUserChoiceFilms";

const useFiltered = () => {
    const { sort, selectedGenres: genres, year } = useTypedSelector(({ filters }) => filters);
    const auth = useTypedSelector(({ auth }) => auth.auth);
    const getUserChoiceFilms = useGetUserChoiceFilms();

    const userChoiceFilms = auth ? getUserChoiceFilms : Films;
    const sortedFilms = userChoiceFilms.sort(getSort(sort));

    return sortedFilms.filter(
        (film) => filterByYear(year, film.release_date) && filterByGenres(genres, film.genre_ids),
    );
};

export default useFiltered;

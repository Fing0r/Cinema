import { IFilms } from "@/types/Films";
import useTypedSelector from "@/hooks/redux";
import { USER_CHOICE } from "@/settings/config";
import Films from "@/api/Films";

const useGetUserChoiceFilms = (): IFilms[] => {
    const { favoritesFilms, laterFilms, userChoice } = useTypedSelector(
        ({ userChoice }) => userChoice,
    );

    switch (userChoice) {
        case USER_CHOICE.FAVORITES:
            return Films.filter((film) => favoritesFilms.includes(film.id));
        case USER_CHOICE.LATER:
            return Films.filter((film) => laterFilms.includes(film.id));
        default:
            return Films;
    }
};

export default useGetUserChoiceFilms;

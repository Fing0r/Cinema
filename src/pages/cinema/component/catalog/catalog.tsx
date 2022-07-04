import { FC, memo } from "react";
import { CardFilm } from "./card";
import useTypedSelector from "@/hooks/redux";
import { getPositionItems } from "@/utils/utils";
import { selectPage } from "@/store/selectors";
import { IFilm } from "@/types/films";

const CatalogCinema = memo(({ filteredFilms }: { filteredFilms: IFilm[] }) => {
    const page = useTypedSelector(selectPage);

    if (!filteredFilms.length) return null;

    const filmItems = filteredFilms.slice(...getPositionItems(page)).map((item) => (
        <li className='catalog__item' key={item.id}>
            <CardFilm {...item} />
        </li>
    ));

    return (
        <section className='cinema__catalog catalog'>
            <ul className='catalog__list'>
                {filmItems}
                {filteredFilms.length === 1 && <li />}
            </ul>
        </section>
    );
});

export { CatalogCinema };

import { FC } from "react";
import CardFilm from "./Card/Card";
import useTypedSelector from "@/hooks/redux";
import useFiltered from "@/hooks/useFiltered";
import { getPositionItems } from "@/utils/utils";

const CatalogCinema: FC = () => {
    const filteredFilms = useFiltered();

    const page = useTypedSelector(({ filters }) => filters.page);
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
};

export default CatalogCinema;

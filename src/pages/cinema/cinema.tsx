import { FC, memo } from "react";
import "./cinema.scss";
import { FiltersCinema } from "./component/filters";
import { CatalogCinema } from "./component/catalog";
import useTypedSelector from "@/hooks/redux";
import { selectFilteredFilms } from "@/store/selectors";

const Cinema: FC = memo(() => {
    const filteredFilms = useTypedSelector(selectFilteredFilms);

    return (
        <div className='cinema' style={{ position: "relative" }}>
            <div className='container'>
                <div className='cinema__wrapper'>
                    <FiltersCinema filmCount={filteredFilms.length} />
                    <CatalogCinema filteredFilms={filteredFilms} />
                </div>
            </div>
        </div>
    );
});

export { Cinema };

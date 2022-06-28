import { FC } from "react";
import CatalogCinema from "@/pages/Cinema/component/Films/Catalog/Catalog";
import FiltersCinema from "@/pages/Cinema/component/Films/Filters/Filters";

const Container: FC = () => {
    return (
        <div className='cinema'>
            <div className='container'>
                <div className='cinema__wrapper'>
                    <FiltersCinema />
                    <CatalogCinema />
                </div>
            </div>
        </div>
    );
};

export default Container;

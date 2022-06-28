import Filters from "@/api/Fiters";
import Checkbox from "@/pages/Cinema/component/Films/Filters/CheckboxesByGenres/Checkbox/Checkbox";

const CheckboxesByGenres = () => {
    return (
        <fieldset className='filters__genre'>
            {Filters.map(({ name, id }) => (
                <Checkbox name={name} key={id} id={id} />
            ))}
        </fieldset>
    );
};

export default CheckboxesByGenres;

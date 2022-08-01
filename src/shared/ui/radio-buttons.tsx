import { ChangeEventHandler, FC } from "react";

interface IRadioBtnData {
    label: string;
    value: string;
}

interface IRadioButtons {
    title: string;
    name: string;
    radioBtnData: IRadioBtnData[];
    handleChange: ChangeEventHandler<HTMLInputElement>;
    className: string;
}

const RadioButtons: FC<IRadioButtons> = ({
    title,
    radioBtnData,
    name,
    handleChange,
    className,
}) => {
    const radioButtonItems = radioBtnData.map(({ label, value }) => (
        <label key={value}>
            <input value={value} name={name} type='radio' onChange={handleChange} />
            {label}
        </label>
    ));

    return (
        <fieldset className={className}>
            <legend>{title}</legend>
            {radioButtonItems}
        </fieldset>
    );
};

export { RadioButtons };

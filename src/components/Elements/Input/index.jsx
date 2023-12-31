/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import Input from "./Input"
import Label from "./Label"


export const InputForm = (props) => {
    const { label, name, type, placeholder } = props;
    return (
        <div className="mb-6">
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} id={name} type={type} placeholder={placeholder} />
        </div>
    )
}

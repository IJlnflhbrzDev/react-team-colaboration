import Button from "../Elements/Button/button"
import { InputForm } from "../Elements/Input"

export const FormRegister = () => {
    return (
        <form>
            <InputForm label="Full Name" id="name" type="text" name="name" placeholder="Jhon Doe" />
            <InputForm label="Email" id="email" type="email" name="email" placeholder="example@gmail.com" />
            <InputForm label="Password" id="password" type="password" name="password" placeholder="********" />
            <InputForm label="Confirm Password" id="password" type="password" name="password" placeholder="********" />
            <Button title="Register" /> 
        </form>
    )
}

import Button from "../Elements/Button/button"
import { InputForm } from "../Elements/Input"

export const FormRegister = () => {
    return (
        <form>
            <InputForm label="Full Name" type="text" name="name" placeholder="Jhon Doe" />
            <InputForm label="Email" type="email" name="email" placeholder="example@gmail.com" />
            <InputForm label="Password" type="password" name="password" placeholder="********" />
            <InputForm label="Confirm Password" type="password" name="password" placeholder="********" />
            <Button title="Register" /> 
        </form>
    )
}

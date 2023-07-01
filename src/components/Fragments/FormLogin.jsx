import Button from "../Elements/Button/button";
import {InputForm} from "../Elements/Input/index";

export const FormLogin = () => {
    return (
        <form>
            <InputForm label="Email" type="email" name="email" placeholder="example@gmail.com" />
            <InputForm label="Password" type="password" name="password" placeholder="********" />
            <Button title="Login" /> 
        </form>
    )
}

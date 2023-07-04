import Button from "../Elements/Button/button";
import { InputForm } from "../Elements/Input/index";

export const FormLogin = () => {
    return (
        <form>
            <InputForm
                label="Email"
                id="email"
                type="email"
                name="email"
                placeholder="example@gmail.com"
            />
            <InputForm
                label="Password"
                id="password"
                type="password"
                name="password"
                placeholder="********"
            />
            <Button title="Login" />
        </form>
    );
};

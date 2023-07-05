/* eslint-disable no-unused-vars */
import Button from "../Elements/Button/button";
import { InputForm } from "../Elements/Input/index";

export const FormLogin = () => {
  const handleLogin = (e) => {
    // Supaya Ga reload ketika di klik button submit
    e.preventDefault();
    // Mengambil value email
    console.log("Email : " + e.target.email.value);
    // Mengambil value password
    console.log("Password : " + e.target.password.value);
    // Memasukan data email ke localstorage
    localStorage.setItem('email', e.target.email.value);
    // Memasukan data password ke localstorage
    localStorage.setItem('password', e.target.password.value);
    window.location.href = '/products';
  };
  return (
    <form onSubmit={handleLogin}>
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
      <Button type="submit" title="Login" />
    </form>
  );
};

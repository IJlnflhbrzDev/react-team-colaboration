import Button from "../Elements/Button/button";
import { InputForm } from "../Elements/Input";

export const FormRegister = () => {
  const handleRegister = (e) => {
    // Supaya Ga reload ketika di klik button submit
    e.preventDefault();
    // Mengambil value fullname
    console.log("Full Name : " + e.target.name.value);

    // Mengambil value email
    console.log("Email : " + e.target.email.value);
    // Mengambil value password
    console.log("Password : " + e.target.password.value);
    console.log("Password : " + e.target.confirmPassword.value);

    window.location.href = '/products';
  };
  return (
    <form onSubmit={handleRegister}>
      <InputForm
        label="Full Name"
        id="name"
        type="text"
        name="name"
        placeholder="Jhon Doe"
      />
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
      <InputForm
        label="Confirm Password"
        id="password"
        type="password"
        name="confirmPassword"
        placeholder="********"
      />
      <Button type="submit" title="Register" />
    </form>
  );
};

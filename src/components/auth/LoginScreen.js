import React from "react";
import { useForm } from "../../hooks/useForm";
import "./login.css";

export const LoginScreen = () => {
  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = formValues;
  console.log(email, password);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="d-flex justify-content-center">
      <form className="box" onSubmit={handleSubmitForm}>
        <h1>Login</h1>
        <p className="text-muted"> Please enter your login and password!</p>
        <input
          autoComplete="off"
          type="email"
          name="email"
          placeholder="Username"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
        />
        <input type="submit" name="" value="Login" />
      </form>
    </div>
  );
};

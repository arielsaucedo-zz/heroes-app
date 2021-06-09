import React from "react";
import { useDispatch } from "react-redux";
import { startLogin } from "../../actions/auth";

import { useForm } from "../../hooks/useForm";
import "./login.css";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: "challenge@alkemy.org",
    password: "react",
  });
  const { email, password } = formValues;

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(startLogin(email, password));
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

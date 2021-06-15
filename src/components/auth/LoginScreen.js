import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { startLogin } from "../../actions/auth";

import "./login.css";
import Swal from "sweetalert2";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  return (
    <div className="d-flex justify-content-center">
      <Formik
        initialValues={{ email: "challenge@alkemy.org", password: "react" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Este campo es requerido";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Ingrese un email correcto";
          }
          if (!values.password) {
            errors.password = "Este campo es requerido";
          }
          return errors;
        }}
        onSubmit={(values) => {
          return dispatch(startLogin(values.email, values.password)).catch(
            () => {
              Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Usuario o contraseña incorrectos",
              });
            }
          );
        }}
      >
        {({
          values,
          touched,
          errors,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <form className="box" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <p className="text-muted"> Please enter your login and password!</p>
            <input
              data-testid="email"
              autoComplete="off"
              type="email"
              name="email"
              placeholder="Username"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && touched.email && errors.email}
            <input
              data-testid="password"
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && touched.password && errors.password}
            <input
              data-testid="button"
              className="btn-login"
              type="submit"
              name=""
              value="Login"
              disabled={isSubmitting}
            />
          </form>
        )}
      </Formik>
    </div>
  );
};

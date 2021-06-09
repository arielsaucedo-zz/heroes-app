import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { startLogin } from "../../actions/auth";

// import { useForm } from "../../hooks/useForm";
import "./login.css";

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
          return errors;
        }}
        onSubmit={(values) => {
          return dispatch(startLogin(values.email, values.password));
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
              autoComplete="off"
              type="email"
              name="email"
              placeholder="Username"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && touched.email && errors.email}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />
            <input
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

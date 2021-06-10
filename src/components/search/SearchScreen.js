import React from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";

import { startSearch } from "../../actions/search";

export const SearchScreen = () => {
  const dispatch = useDispatch();

  return (
    <div className="d-flex justify-content-center">
      <div className="row">
        <div>
          <h2>Search Form</h2>
          <hr />
          <Formik
            initialValues={{ searchText: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.searchText) {
                errors.searchText =
                  "Este campo es requerido para realizar la busqueda";
              }
              return errors;
            }}
            onSubmit={(values) => {
              return dispatch(startSearch(values.searchText)).catch((err) => {
                console.log(err);
              });
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
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Find your hero"
                  className="form-control"
                  name="searchText"
                  autoComplete="off"
                  value={values.searchText}
                  onChange={handleChange}
                />
                <span>{errors.email && touched.email && errors.email}</span>
                <button
                  type="submit"
                  className="btn btn-primary mt-3 w-100"
                  disabled={isSubmitting}
                >
                  Search
                </button>
              </form>
            )}
          </Formik>
        </div>

        <div className="d-flex row justify-content-center mt-4">
          <h2 className="text-center">Resultados</h2>
          <div className="container mt-4">
            <div className="row text-center">
              <div className="col">Column</div>
              <div className="col">Column</div>
              <div className="col">Column</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

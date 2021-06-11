import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";

import { startSearch } from "../../actions/search";
import { SearchCard } from "./SearchCard";

export const SearchScreen = () => {
  const dispatch = useDispatch();

  const { results, search } = useSelector((state) => state.search);
  console.log(results);

  return (
    <div className="d-flex justify-content-center ">
      <div>
        <div>
          <h2>Search Form</h2>
          <hr />
          <Formik
            initialValues={{ searchText: "" }}
            validate={(values) => {
              const errors = {};
              if (values.searchText === "") {
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
              <form
                onSubmit={handleSubmit}
                className="d-flex flex-column justify-content-center"
              >
                <input
                  type="text"
                  placeholder="Find your hero"
                  className="form-control w-50 align-self-center"
                  name="searchText"
                  autoComplete="off"
                  value={values.searchText}
                  onChange={handleChange}
                />
                <span>
                  {errors.searchText && touched.searchText && errors.searchText}
                </span>
                <button
                  type="submit"
                  className="btn btn-primary mt-3 w-50 align-self-center"
                  disabled={isSubmitting}
                >
                  Search
                </button>
              </form>
            )}
          </Formik>
        </div>
        <div className="d-flex row justify-content-center mt-4 w-100">
          <h2 className="text-center">Resultados</h2>
          {search === null && (
            <h3 className="text-center w-100">Busca tu heroe para tu equipo</h3>
          )}
          {search === "ok" && results.length === 0 && (
            <div className="alert alert-danger text-center fw-bolder fs-4">
              No existe ningun heroe para su busqueda
            </div>
          )}

          <div className="d-flex justify-content-evenly flex-wrap">
            {results.map((hero) => (
              <div className="m-1" key={hero.id}>
                <SearchCard {...hero} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

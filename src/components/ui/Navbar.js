import React from "react";
import { NavLink } from "react-router-dom";

import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand">Navbar</div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
            <li className="nav-item">
              <NavLink className="nav-link" to="/marvel">
                Marvel
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/marvel">
                DC
              </NavLink>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      <button className="btn btn-danger m-2" type="submit">
        Logout
      </button>
    </nav>
  );
};

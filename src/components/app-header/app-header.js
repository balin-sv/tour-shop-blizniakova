import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CartWidget from "../cart-widget/cart-widget";
import { SearchContext } from "../context/search-context";
import "./app-header.css";
import Utils from "../utils";

const AppHeader = () => {
  const util = new Utils();
  const value = useContext(SearchContext);
  const [inputVal, setInpVal] = useState("");

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary ">
      <div className="container-fluid">
        <Link to={"/cart"} className="navbar-brand" href="#">
          <CartWidget />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/tours"} className="nav-link">
                Tours
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/tickets"} className="nav-link" href="#">
                Tickets
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/cart"} className="nav-link" href="#">
                Cart
              </Link>
            </li>
          </ul>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (inputVal === "") {
                alert("debe escribir algo");
                return;
              }

              if (!util.checkName(inputVal.trim())) {
                alert("solo se aceptan letras");
                return;
              } else {
                value.onClickHandler(inputVal);
              }
              setInpVal("");
            }}
            className="d-flex"
          >
            <input
              value={inputVal}
              onChange={(e) => {
                setInpVal(e.target.value);
              }}
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;

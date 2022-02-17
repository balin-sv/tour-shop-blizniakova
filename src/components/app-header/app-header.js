import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CartWidget from "../cart-widget/cart-widget";
import { SearchContext } from "../context/search-context";
import "./app-header.css";

const AppHeader = () => {
  const value = useContext(SearchContext);
  const [inputVal, setInpVal] = useState("");
  const handleChange = function (e) {
    setInpVal(e.target.value);
  };

  useEffect(() => {}, [inputVal]);

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <CartWidget />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Home
                {/* <span className
                  ="visually-hidden">(current)</span> */}
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
              value.onClickHandler(inputVal);
              setInpVal("");
              e.preventDefault();
            }}
            className="d-flex"
          >
            <input
              value={inputVal}
              onChange={(e) => {
                handleChange(e);
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

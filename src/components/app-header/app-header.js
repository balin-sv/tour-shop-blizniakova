import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CartWidget from "../cart-widget/cart-widget";
import { SearchContext } from "../context/search-context";

const AppHeader = () => {
  const value = useContext(SearchContext);
  const [inpVal, setInpVal] = useState("");
  const handleChange = function (e) {
    setInpVal(e.target.value);
  };

  useEffect(() => {
    //para que onChange no se tarda
    console.log(inpVal);
  }, [inpVal]);

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <CartWidget />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <Link to={"/"} className="nav-link">
                  Home
                  {/* <span class="visually-hidden">(current)</span> */}
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/tours"} className="nav-link">
                  Tours
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/tickets"} className="nav-link" href="#">
                  Tickets
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/cart"} className="nav-link" href="#">
                  Cart
                </Link>
              </li>
            </ul>
            <form
              onSubmit={(e) => {
                value.onClickHandler(inpVal);
                setInpVal("");
                e.preventDefault();
              }}
              class="d-flex"
            >
              <input
                value={inpVal}
                onChange={(e) => {
                  handleChange(e);
                }}
                class="form-control me-sm-2"
                type="text"
                placeholder="Search"
              />
              <button class="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AppHeader;

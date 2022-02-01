import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../cart-widget/cart-widget";
import logo from "./logo.png";

const AppHeader = () => {
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
            </ul>
            <form class="d-flex">
              <input
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

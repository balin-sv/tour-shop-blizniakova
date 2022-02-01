import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AppHeader from "./app-header";
import Spinner from "./spinner/spinner";
const Layout = () => {
  //   const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      <AppHeader />
      <Outlet />
      {/* {isLoaded ? <Spinner /> :} */}
    </>
  );
};

export default Layout;

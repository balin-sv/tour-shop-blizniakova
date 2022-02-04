import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Spinner from "./spinner/spinner";
const Layout = () => {
  //   const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      <Outlet />
      {/* {isLoaded ? <Spinner /> :} */}
    </>
  );
};

export default Layout;

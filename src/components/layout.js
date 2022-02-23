import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Spinner from "./spinner/index";
const Layout = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;
    return () => (mounted = false);
  }, []);

  return (
    <>
      <Outlet context={{ setIsLoaded }} />
      {isLoaded ? <Spinner /> : null}
    </>
  );
};

export default Layout;

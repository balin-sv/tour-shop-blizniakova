import React from "react";
import { useState } from "react";
import AdminDashboard from "./admin-dashboard";
import LogIn from "./log-in";

const Admin = () => {
  const [isLoged, setIsLoged] = useState(false);

  return (
    <>
      {isLoged ? (
        <AdminDashboard setIsLoged={setIsLoged} isLoged={isLoged} />
      ) : (
        <LogIn setIsLoged={setIsLoged} />
      )}
    </>
  );
};

export default Admin;

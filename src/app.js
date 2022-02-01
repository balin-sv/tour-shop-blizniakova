import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import Layout from "./components/layout";
import Tickets from "./components/pages/tickets";
import Tours from "./components/pages/tours";
import Detale from "./components/pages/detale";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/:category/:id" element={<Detale />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

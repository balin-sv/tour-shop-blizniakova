import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppHeader from "./components/app-header";
import Home from "./components/pages/home";
import Layout from "./components/layout";
import Tickets from "./components/pages/tickets";
import Tours from "./components/pages/tours";
import Detale from "./components/pages/detale";
import Cart from "./components/pages/cart";
import { CartProvider } from "./components/context/cart-context";

const App = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <AppHeader />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/tours" element={<Tours />} />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/:category/:id" element={<Detale />} />
              <Route path="/Cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
};

export default App;

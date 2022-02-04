import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
// import { CartProvider } from "./components/context/cart-context";

ReactDOM.render(
  <React.StrictMode>
    {/* <CartProvider> */}
    <App />
    {/* </CartProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

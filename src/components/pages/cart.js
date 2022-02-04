import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cart-context";

const Cart = () => {
  const value = useContext(CartContext);
  console.log("final", value.items);

  return (
    <>
      <h1>Cart</h1>
      <div>Total en el carrito: {value.getCartQuantity()}</div>
      <div>
        Detalle de compra:
        {value.items.map((item) => {
          console.log(item.date);
          return (
            <ul>
              <li>EXCURCION - {item.data.name}</li>
              <li>CUPOS - {item.qty}</li>
              <li>PARA LA FECHA - {item.date.toString()} </li>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default Cart;

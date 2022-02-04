import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context/cart-context";

const CartWidget = () => {
  const value = useContext(CartContext);
  console.log(value);
  return (
    <div>
      <FontAwesomeIcon size="lg" icon={faCartArrowDown} />
      <div>{value.getCartQuantity()}</div>
    </div>
  );
};

export default CartWidget;

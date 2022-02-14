import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context/cart-context";
import { useEffect, useState } from "react/cjs/react.development";

const CartWidget = () => {
  const value = useContext(CartContext);
  const [a, setA] = useState();

  useEffect(() => {
    setA(value.getCartQuantity());
  }, [value.items]);
  return (
    <div>
      <FontAwesomeIcon size="lg" icon={faCartArrowDown} />
      <div>{a}</div>
    </div>
  );
};

export default CartWidget;

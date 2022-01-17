import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
  return (
    <div>
      <FontAwesomeIcon size="lg" icon={faCartArrowDown} />
    </div>
  );
};

export default CartWidget;

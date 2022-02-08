import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cart-context";
import Item from "../item";
import "./cart.css";

const Cart = () => {
  const value = useContext(CartContext);

  function sum() {
    const a = [];
    if (value.items.length === 0) {
      return;
    }
    value.items.forEach((item) => {
      a.push(item.total);
    });

    const total = a.reduce((a, b) => {
      return a + b;
    });
    return <h1>TOTAL A PAGAR {total} USD</h1>;
  }

  return (
    <>
      <h1>Cart</h1>
      <div>Total en el carrito: {value.getCartQuantity()}</div>
      <div>
        {value.items.map((item) => {
          return (
            <>
              <ul key={item.id} className="list-group mt-3 ">
                <li className="list-group-item active">
                  EXCURCION - {item.data.name}
                </li>
                <li className="list-group-item">
                  CUPOS RESERVADOS - {item.qty}
                </li>
                <li className="list-group-item">
                  PARA LA FECHA - {item.date.toString()}
                </li>
                <li className="list-group-item">
                  VALOR POR CUPO - {item.price}
                </li>
                <li className="list-group-item">
                  TOTAL POR CUPOS - {item.total}
                  {/* {(function () {
                    return item.price * item.qty;
                  })()} */}
                </li>
              </ul>

              <button
                onClick={(evt) => {
                  value.removeItem(item.id);
                }}
                className="m-2 btn btn-secondary"
              >
                Eleminar la reserva
              </button>
            </>
          );
        })}
        <h4>
          {value.isEmpty ? (
            <>
              <Link className="btn btn-secondary" to={"/"}>
                a las compras
              </Link>
            </>
          ) : (
            sum()
          )}
        </h4>
      </div>
    </>
  );
};

export default Cart;

import React from "react";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart-context";
import "./cart.css";
import SweetAlert from "react-bootstrap-sweetalert";

import OrderForm from "./order-form";

const Cart = () => {
  const value = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(null);

  useEffect(() => {
    if (value.items.length > 0) {
      const a = [];
      value.items.forEach((item) => {
        a.push(item.total);
      });
      const res = a.reduce((a, b) => {
        return a + b;
      });

      setTotalPrice((prev) => res);
    }
  }, [value.items]);

  const onConfirm = () => {
    value.setIsAdded(false);
  };

  return (
    <>
      <h1>Cart</h1>
      <div className="container">
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
                  </li>
                  <li className="list-group-item">
                    <button
                      onClick={(evt) => {
                        value.removeItem(item.id);
                      }}
                      className="m-2 btn btn-danger"
                    >
                      Eleminar la reserva
                    </button>
                  </li>
                </ul>
              </>
            );
          })}
          <h4>
            {value.isAdded ? (
              <SweetAlert
                success
                title="Compra finalizada!"
                onConfirm={() => {
                  onConfirm();
                }}
              >
                Espera 2 segundos o preciona ok
              </SweetAlert> // <div
            ) : //   style={{
            //     position: "absolute",
            //     top: 0,
            //     left: 0,
            //     width: "100%",
            //     height: "50%",
            //     backgroundColor: "rgba(114, 155, 67,0.7)",
            //   }}
            // ></div>
            null}
            {value.isEmpty ? (
              <>
                <Link className="btn btn-success" to={"/"}>
                  a las compras
                </Link>
              </>
            ) : (
              <OrderForm totalPrice={totalPrice} />
            )}
          </h4>
        </div>
      </div>
    </>
  );
};

export default Cart;

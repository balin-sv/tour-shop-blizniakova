import React, { useState, useEffect, useContext } from "react";
import "./item-count.css";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { CartContext } from "../context/cart-context";

const ItemCount = ({ data }) => {
  const [count, setCount] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  const value = useContext(CartContext);

  useEffect(() => {
    setCount(1);
  }, [startDate]); // para que cambia el valor de count cuando se cambia la fecha

  function increnemt() {
    if (count !== data.stock``) {
      setCount(count + 1);
    }
  }

  function decrement() {
    if (count !== 0) {
      setCount(count - 1);
    }
  }

  const goToCart = (data, qty, startDate) => {
    const newObj = {
      id: value.generateItemID(),
      data: data,
      price: data.price,
      qty: qty,
      date: startDate,
      total: (function () {
        return data.price * qty;
      })(),
    };

    value.addItem(newObj);

    navigate("/cart");
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-3">
          <div className="row counter-number">
            <span>
              Cupos disponibles: <span className="vacant">{data.vacant}</span>
            </span>
          </div>
          <div className="row row-align mt-2">
            <button
              className="col-5"
              onClick={increnemt}
              className="col-2 btn btn-secondary"
            >
              +
            </button>
            <span className=" col-5 count-input ">{count}</span>
            <button
              className="col-4"
              onClick={decrement}
              className="col-2 btn btn-secondary"
            >
              -
            </button>
          </div>
          <div className="row mt-2">
            <button
              onClick={() => {
                goToCart(data, count, startDate);
              }}
              className="col-12 btn btn-success"
            >
              Reservar
            </button>
          </div>
        </div>
        <div className="col-6">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            inline
          />
        </div>
      </div>
    </div>
  );
};

export default ItemCount;

// onClick={() => {
//   onAdd(count);
//   setCount((prev) => {
//     let aux = prev;
//     if (data.cupos - prev <= 0) {
//       aux = 0;
//     } else {
//       aux = 1;
//     }
//     return aux;
//   });
// }}

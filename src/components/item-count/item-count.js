import React, { useState, useEffect, useContext } from "react";
import "./item-count.css";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { CartContext } from "../context/cart-context";

const ItemCount = ({ data, max }) => {
  const [count, setCount] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  const value = useContext(CartContext);

  function increnemt() {
    if (count !== max) {
      setCount(count + 1);
    }
  }

  function decrement() {
    if (count !== 0) {
      setCount(count - 1);
    }
  }

  const goToCart = (data, count, startDate) => {
    const newObj = {
      id: value.generateItemID(),
      data: data,
      price: data.price,
      qty: count,
      date: startDate,
      total: (function () {
        return data.price * count;
      })(),
    };

    value.addItem(newObj);
    navigate("/cart");
  };

  return (
    <div className="d-flex flex-column">
      <div className="counter-number">
        Cupos disponibles:
        <span className="vacant">{max}</span>
      </div>
      <div className="btn-box mt-2 d-flex justify-content-between flex-nowrap">
        <button onClick={increnemt} className="btn-count btn btn-secondary">
          +
        </button>
        <span className=" count-input ">{count}</span>
        <button onClick={decrement} className="btn-count btn btn-secondary">
          -
        </button>
      </div>
      <div className="btn-box mt-2">
        {max === 0 ? (
          <button className="btn-buy btn btn-secondary">No hay cupos</button>
        ) : (
          <button
            onClick={() => {
              goToCart(data, count, startDate);
            }}
            className="btn-buy btn btn-success"
          >
            Reservar
          </button>
        )}
      </div>
      <div className="mt-4">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          inline
        />
      </div>
    </div>
  );
};

export default ItemCount;

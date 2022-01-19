import React, { useState } from "react";
import "./item-count.css";

const ItemCount = ({ data, onAdd }) => {
  const [count, setCount] = useState(1);

  function increnemt() {
    if (count !== data.cupos) {
      setCount(count + 1);
    }
  }

  function decrement() {
    if (count !== 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="counter-box">
      <div className="column-wrap">
        <span>
          Excurcion:
          <span className="counter-data">{data.name.toUpperCase()}</span>
        </span>
        <span>
          Cupos disponibles: <span className="counter-data">{data.cupos}</span>
        </span>
      </div>
      <div className="row-wrap row-align">
        <button onClick={increnemt} className="btn btn-secondary">
          +
        </button>
        <div className="row-wrap">
          <span className="counter-number count-input ">{count}</span>
        </div>
        <button onClick={decrement} className="btn btn-secondary">
          -
        </button>
      </div>
      <button
        onClick={() => {
          onAdd(count);
          setCount((prev) => {
            let aux = prev;
            if (data.cupos - prev <= 0) {
              aux = 0;
            } else {
              aux = 1;
            }
            return aux;
          });
        }}
        className="btn btn-success"
      >
        Pagar
      </button>
    </div>
  );
};

export default ItemCount;

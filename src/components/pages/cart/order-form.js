import React from "react";
import { useState, useEffect, useContext } from "react";
import { collection, addDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { CartContext } from "../../context/cart-context";
import { doc, getDoc } from "firebase/firestore";

const OrderForm = ({ totalPrice }) => {
  const value = useContext(CartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Add a new document with a generated id.
  async function addOrderToFirebase() {
    console.log(name);
    const newObj = {
      orders: value.items,
      name: name,
      email: email,
      phone: phone,
    };
    const docRef = await addDoc(collection(db, "orders"), newObj);
    console.log("Document written with ID: ", docRef.id, docRef);

    const getItem = async (id) => {
      const ref = doc(db, "items", id);
      const docSnap = await getDoc(ref);
      const a = docSnap.data().stock - value.items[0].qty;

      updateDoc(ref, {
        stock: a,
      });
    };

    value.items.forEach((item) => {
      getItem(item.data.itemID);
    });

    console.log("item has updeted");
    value.setIsAdded(true);
  }

  function writeName(e) {
    setName(e.target.value);
  }
  function writeEmail(e) {
    setEmail(e.target.value);
  }
  function writePhone(e) {
    setPhone(e.target.value);
  }

  useEffect(() => {
    if (value.isAdded) {
      function switchIsAdded() {
        value.setIsAdded(false);
      }
      setTimeout(switchIsAdded, 3000);
    }
  }, [value.isAdded]);

  return (
    <>
      <div className="container mt-5">
        <h4>
          TOTAL A PAGAR <span>{totalPrice} </span>USD
        </h4>
        <p>Llena el formulario y finaliza la compra</p>
        <form>
          <div class="form-group mt-3">
            <input
              value={name}
              onChange={(e) => {
                writeName(e);
              }}
              type="text"
              class="form-control"
              id="exampleInputText1"
              placeholder="Nombre"
            />
          </div>
          <div class="form-group mt-3">
            <input
              value={email}
              onChange={(e) => {
                writeEmail(e);
              }}
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
          <div class="form-group mt-3 mb-3">
            <input
              value={phone}
              onChange={(e) => {
                writePhone(e);
              }}
              type="tel"
              class="form-control"
              placeholder="Telefono: 123-456-7890"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
          </div>

          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              addOrderToFirebase();
            }}
            className="btn btn-success mt-2"
          >
            Finalizar la compra
          </button>
        </form>
      </div>
    </>
  );
};

export default OrderForm;

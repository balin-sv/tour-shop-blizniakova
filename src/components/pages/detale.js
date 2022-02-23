import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../item-detail-container";
import { CartContext } from "../context/cart-context";
import FirebaseService from "../firebase-service";
import { useOutletContext } from "react-router-dom";

const Detale = () => {
  const { setIsLoaded } = useOutletContext();
  const fbService = new FirebaseService();
  const value = useContext(CartContext);
  const { category, id } = useParams();
  const [item, setItem] = useState({});
  const [max, setMax] = useState();

  useEffect(() => {
    let mounted = true;
    setIsLoaded(true);
    checkCart(id).then((prom) => setMax(prom));
    fbService.getItemByID(id).then((item) => {
      if (mounted) {
        setItem((prev) => item);
        setTimeout(() => {
          setIsLoaded(false);
        }, 500);
      }
      setItem(item);
    });
    return () => (mounted = false);
  }, [id]);

  async function checkCart(id) {
    const res = await fbService.getItemByID(id);
    const stock = res.stock;
    console.log(stock);
    console.log(value.items);

    if (value.items.length > 0) {
      const itemsInCart = value.items.filter((item) => {
        return item.data.itemID === id;
      });
      console.log(itemsInCart);

      if (itemsInCart.length > 1) {
        const sum = itemsInCart.reduce((a, b) => {
          return a.qty + b.qty;
        });
        console.log(stock - sum);
        return stock - sum;
      } else if (itemsInCart.length === 1) {
        console.log("dfsda", itemsInCart[0].qty);
        return stock - itemsInCart[0].qty;
      } else {
        return stock;
      }
    } else {
      return stock;
    }
  }

  return (
    <div>
      <ItemDetailContainer data={item} max={max} />
    </div>
  );
};

export default Detale;

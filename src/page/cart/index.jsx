import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  return (
    <ul>
      {products.map((item) => {
        return (
          <li
            key={item.id}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span>{item.title}</span>
            <span>{item.price}</span>
            <span>{item.qty}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Cart;

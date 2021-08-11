import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, cartSetter] = useState(false)

  function addToCart(){
    cartSetter(!cart)

  }
  const inCart = cart ? "in-cart": ""
  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>Add to Cart</button>
    </li>
  );
}

export default Item;

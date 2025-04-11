import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setCart] = useState(false)
  function addToCart(){
    setCart(!inCart)
  }

  const itemClass = inCart ? "in-cart": ""   
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className={inCart? "remove":"add"}>{inCart? "Remove from Cart" :"Add to Cart"}</button>
    </li>
  );
}

export default Item;

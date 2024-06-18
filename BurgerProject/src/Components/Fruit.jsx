import React from "react";
import "../style/fruit.css";

function Fruit({ fruit }) {
  const { id, fruitName, fruitPrice, fruitImg } = fruit;
  //   console.log(fruit);
  return (
    <div className="fruit_card">
      <img src={fruitImg} alt="" />
      <div className="fruit_name">{fruitName}</div>
      <div>
        <p>burger fake 350 gr</p>
      </div>
      <div className="fruit_price">{fruitPrice} USD</div>
    </div>
  );
}

export default Fruit;

import React, { useContext } from "react";
import { GlobalContex } from "../contexAPI/GlobalState";
import Fruit from "./Fruit";
import "../style/fruits.css";

function Fruits() {
  const { fruitsArr } = useContext(GlobalContex);
  //   console.log(fruitsArr);

  return (
    <div className="fruits_container">
      {fruitsArr &&
        fruitsArr.map((fruit) => <Fruit key={fruit.id} fruit={fruit} />)}
    </div>
  );
}

export default Fruits;

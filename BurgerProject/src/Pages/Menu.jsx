import React from "react";
import Fruits from "../Components/Fruits";
import "../style/menu.css";

function Menu() {
  return (
    <div className="menu_container">
      <div className="menu_container_text">
        <h2>MENU</h2>
      </div>
      <Fruits />
    </div>
  );
}

export default Menu;

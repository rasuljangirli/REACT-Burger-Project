import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../style/navigation.css";
import Logo from "../assets/burgerlogo.png";

function Navigation() {
  const navigate = useNavigate();
  return (
    <div className="navigation_container">
      <div className="navigation_container_logo">
        <img onClick={() => navigate("/")} src={Logo} />
      </div>
      <div className="navigation_container_links">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/menu"}>Menu</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contactus"}>Contact Us</NavLink>
      </div>
    </div>
  );
}

export default Navigation;

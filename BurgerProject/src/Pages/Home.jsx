import React from "react";
import BannerYeni from "../assets/banneryeni.jpg";
import "../style/home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home_page_container">
      <div className="home_page_containerDiv">
        <img src={BannerYeni} />
        <button onClick={() => navigate("/menu")}>Buy Burger</button>
      </div>
    </div>
  );
}

import React from "react";
import "../style/about.css";
import BannerAbout from "../assets/banneryeni.jpg";

function About() {
  return (
    <div className="about_container">
      <div className="about_container_img">
        <img src={BannerAbout} alt="" />
      </div>
      <div className="about_container_text">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          debitis reprehenderit libero modi! Iste quaerat at autem placeat
          facilis illum id dicta, odio vero exercitationem molestiae voluptates
          non beatae. Sint. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Fugiat debitis reprehenderit libero modi! Iste quaerat at autem
          placeat facilis illum id dicta, odio vero exercitationem molestiae
          voluptates non beatae. Sint. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Fugiat debitis reprehenderit libero modi! Iste
          quaerat at autem placeat facilis illum id dicta, odio vero
          exercitationem molestiae voluptates non beatae. Sint.
        </p>
      </div>
    </div>
  );
}

export default About;

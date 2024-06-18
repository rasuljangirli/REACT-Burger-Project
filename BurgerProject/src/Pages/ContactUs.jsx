import React from "react";
import ContactImg from "../assets/banner.png";
import "../style/contactUs.css";
function ContactUs() {
  return (
    <div className="contact_conteiner">
      <div className="contact_conteiner_Img">
        <img src={ContactImg} alt="" />
      </div>
      <div className="contact_conteiner_form">
        <form action="">
          <label htmlFor="">LastName</label>
          <input type="text" />

          <label htmlFor="">FirstName</label>
          <input type="text" />

          <label htmlFor="">Write Message</label>
          <textarea name="" id=""></textarea>

          <button>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;

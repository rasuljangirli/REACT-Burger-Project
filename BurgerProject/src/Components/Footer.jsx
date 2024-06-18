import React from "react";
import "../style/footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
function Footer() {
  return (
    <div className="footer_conteiner">
      <FaFacebook className="footer_conteiner_icon" />
      <FaInstagramSquare className="footer_conteiner_icon" />
      <FaLinkedin className="footer_conteiner_icon" />
    </div>
  );
}

export default Footer;

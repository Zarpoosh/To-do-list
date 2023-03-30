import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p style={{marginTop:"50px"}}>حقوق این سایت متعلق به مینو زرپوش میباشد</p>
      <Link to="/about">درباره ما</Link>
    </footer>
  );
};

export default Footer;

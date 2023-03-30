import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h3 style={{textAlign:"center"}}>درباره ما</h3>
      <Link to="/">برو به خانه</Link>
    </div>
  );
};

export default About;

import React from "react";
import "./Hero.css";
import handicon from "../Assets/Frontend_Assets/hand_icon.png";
import arrow_icon from "../Assets/Frontend_Assets/arrow.png";
import hero_image from "../Assets/Frontend_Assets/hero_image.png"
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New ARRIVALS ONLY</h2>
        <div>
          <div className="hand-hand-icon">
            <p>new</p>
            <img src={handicon} alt="" />
          </div>
          <p>Collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
         <div>Latest collection</div>
         <img src={arrow_icon} alt=""/>
        </div>
        <div></div>
      </div>

      <div className="hero-right">
<img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;

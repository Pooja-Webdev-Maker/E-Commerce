import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from '../Assets/arrow.png'
// import hero_image from '../Assets/hero_image.png'
import hero_image3 from '../Assets/hero_image3.webp'
function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVELS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>Your</p>
            <img src={hand_icon} alt="" />
          </div>
          <p style={{color:'#FF0000'}}>Next Favorite</p>
          <p>Outfit Awaits</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest collections</div>
            <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={ hero_image3} alt="" />
      </div>
    </div>
  );
}

export default Hero;

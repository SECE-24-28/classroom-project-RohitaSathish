import React from "react";
import { HomeStyle } from "./home-style";
import heroImage from "../assets/image2.jpg";

const Home = () => {
  return (
    <HomeStyle>
      <div className="hero">
        <div className="hero-left">
          <h1>
            Furniture That <br />
            <span>Elevates Your Space</span>
          </h1>
          <p>Crafted for comfort. Designed for modern living.</p>
          <div className="buttons">
            <button className="shop">Shop Now</button>
            <button className="arrival">Check New Arrivals</button>
          </div>
        </div>

        <div className="hero-right">
          <img src={heroImage} alt="room" />
        </div>
      </div>
    </HomeStyle>
  );
};

export default Home;

import React from "react";
import "./Home.css";
import Heroimg from "../../../../assets/heroimage.png";

function Home() {
  return (
    <div className="hero-body">
      <div>
        <div className="inside-div">
          <h1 className="hero-header">
            Create, Sell & Collect Your Own Creative NFT
          </h1>
          <div className="hero-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit.
            </p>
          </div>
        </div>
      </div>
      <div className="hero-img">
        <img alt="Hero" src={Heroimg} />
      </div>
      <div className="hero-numbers">
        <a href="#collection"> <button className="hero-button button">Explore</button></a>
        <div className="lol">
          <div className="hero-artworks">
            <h1>37k+</h1>
            <p>Artworks</p>
          </div>
          <div className="hero-artists">
            <h1>20k+</h1>
            <p>Artists</p>
          </div>
          <div className="hero-aucations">
            <h1>99k+</h1>
            <p>Auctions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

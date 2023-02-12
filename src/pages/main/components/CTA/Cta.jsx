import React from "react";
import "./Cta.css";

function Cta() {
  return (
    <div className="cta-box">
      <h1>
        Get Ready To Collect <br /> Our Nfts
      </h1>
      <a href="/" onClick={e => {
        let collection = document.getElementById("collection");
        e.preventDefault();
        collection && collection.scrollIntoView();
      }}>
        <button className="cta-button">Get Started</button>
      </a>
    </div>
  );
}

export default Cta;

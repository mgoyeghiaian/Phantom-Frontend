import React from "react";
import "./Topcreator.css";
import Data from "./IndexCreator";
import { useState, useEffect } from "react";

function TopCreator() {
  // const [creator, setCreator] = useState([]);

  // useEffect(() => {
  //   fetchingCreators();
  // }, []);

  // const fetchingCreators = async () => {
  //   const response = await fetch("/creator");
  //   const data = response.json();
  //   console.log(data);
  //   setCreator(data);
  //   console.log("Hello");
  // };

  return (
    <>
      <div className="Main-creator">
        <div className="Top-creator">
          <div className="nfts">
            {Data.map((item, index) => {
              return (
                // Section One
                <div className="card-container-creator" key={index}>
                  <div className="card-section-one">
                    <div className="backgroundcreator">
                      <img className="nft-img" src={item.bckgrndimg} alt="" />
                    </div>
                    <div className="image-creator">
                      <img src={item.creatorimg} alt="" />
                    </div>
                  </div>
                  {/* Section Two */}
                  <div className="card-section-two">
                    <div className="Description-creator">
                      <div>{item.name}</div>
                      <div>{item.descrip}</div>
                      <div>
                        <button className="button creator-button">
                          +Follow
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default TopCreator;

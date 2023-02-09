import React from "react";
// import './Topcreator.css'
// import Data from './static/indexx'
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Creator() {
  const [creator, setCreator] = useState([]);

  useEffect(() => {
    fetchingCreators();
  }, []);

  const fetchingCreators = async () => {
    const response = await axios.get("http://localhost:3030/creators/");

    console.log(response.data);
    setCreator(response.data);
    console.log("Hello");
  };

  return (
    <>
      <div className="Main-creator-dashboard">
        <div className="Top-creator-dashboard">
          <div className="nfts--creator-dashboard">
            {creator.map((item, index) => {
              return (
                // Section One
                // Add creator
                //items
                // creator name
                // background image
                // creator image
                // description

                <div className="card-container-creator-dashboard" key={index}>
                  <div className="card-section-one-dashboard">
                    <div className="backgroundcreator-dashboard">
                      <img className="nft-img" src={item.bckgrndimg} alt="" />
                    </div>
                    <div className="image-creator-dashboard">
                      <img src={item.creatorimg} alt="" />
                    </div>
                  </div>
                  {/* Section two
                update creator */}

                  <div className="card-section-two-dashboard">
                    <div className="Description-creator-dashboard">
                      <div>{item.creatorName}</div>
                      <div>{item.description}</div>
                      <div>
                        <button className="button creator-button-dashboard">
                          Update
                        </button>
                        <button className="button creator-button-dashboard">
                          Delete
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

export default Creator;

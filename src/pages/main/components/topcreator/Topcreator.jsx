import React from "react";
import "./Topcreator.css";
// import Data from "./IndexCreator";
import axios from "axios";

import { useState, useEffect } from "react";

function TopCreator() {
  const [creator, setCreator] = useState([]);

  useEffect(() => {
    fetchingCreators();
  }, []);

  const fetchingCreators = async () => {
    const response = await axios.get ("http://localhost:3030/nft/nfts");
    const data = response.json();
    console.log(data);
    setCreator(data);
    console.log("Hello");
  };

  // const [creator, setCreators] = useState([]);

  // useEffect(() => {
  //   // setIsLoading(true);
  //   fetchCreators();
  // }, []);

  // const fetchCreators = async () => {
  //   try {
  //     const res = await fetch("/creator", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const resJson = await res.json();
  //     setCreators(resJson.data);
  //     console.log("The creator", creator);
  //   } catch (error) {
  //     console.log("This is an error", error);
  //   }
  // };

  return (
    <>
      <div className="Main-creator">
        <div className="Top-creator">
          <div className="nfts">
            {creator.map((item) => {
              return (
                // Section One

                <div className="card-container-creator" key={item._id}>
                  <div className="card-section-one">
                    <div className="backgroundcreator">
                      <img className="nft-img" src={item.bckgrndimg} alt="" />
                    </div>
                    <div className="image-creator">
                      <img src={item.creatorimg} alt="" />
                    </div>
                  </div>

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

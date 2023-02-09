import React from 'react'
import './Topcreator.css'
// import Data from './static/indexx'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link, useParams } from "react-router-dom";

function Creator(){const [creator, setCreator] = useState([]);

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
      <div className="Main-creator">
        <div className="Top-creator">
          <div className="nfts">
            {creator.map((item,index) => {
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

                  <div className="card-section-two">
                    <div className="Description-creator">
                      <div>{item.creatorName}</div>
                      <div>{item.description}</div>
                      <div>
                        <button className="button creator-button">
                          Update
                        </button>
                        <button className="button creator-button">
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










    )}
  
  
  
  
  
  
  
  


































 export default Creator;

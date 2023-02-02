import React from "react";
import "./Topcreator.css";
import Data from "./IndexCreator";
function TopCreator() {
  return (
    <>
      <div className="Main-creator">
        <div className="Top-creator">
          <div className="nfts">
            {Data.map((item, index) => {
              return (
                <div className="pics" key={index}>
                  <div className="creator">
                    <div className="backgroundcreator">
                      <img className="nft-img" src={item.bckgrndimg} alt="" />
                    </div>
                    <div className="image-creator"> 

                    <img 
                      src={item.creatorimg}
                      alt=""/>
                      </div>
                    <p className= "centerp" >{item.name}</p>
                    <p className= "centerp">{item.descrip}</p>
                  </div>

                  <button className=" button collection-button ">
                    +Follow
                  </button>
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

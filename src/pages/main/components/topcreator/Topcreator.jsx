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
                  <img className="nft-img" src={item.bckgrndimg} />

                  <div className="creator">
                    <img className="firstpart-creator" src={item.creatorimg} />
                    <p className="secondpart-creator">{item.name}</p>
                    <p className="secondpart-creator">{item.descrip}</p>
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

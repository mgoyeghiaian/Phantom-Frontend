import React from "react";
import "./Topcreator.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Topcreator() {
  const [data, setCreator] = useState([]);
  const [followedCreators, setFollowedCreators] = useState([]);

  useEffect(() => {
    loadCreator();
  }, []);

  const loadCreator = async () => {
    const res = await axios.get("https://phantom-rk5i.onrender.com/creators");
    setCreator(res.data);
  };

  const followCreator = (creatorId) => {
    setFollowedCreators([...followedCreators, creatorId]);
    alert(
      `You followed ${data.find((item) => item._id === creatorId).creatorName}`
    );
  };

  return (
    <>
      <div className="colle">
        Top Creator
        <br />
        <p className="desc">
          Lorem ipsum dolor sit amet, consectetur <br />
          adipiscing elit.
        </p>
        <div className="mappingdata">
          {data.map((item, index) => {
            return (
              <div className=" pics creator-body" key={index}>
                <div className="info-parts">
                  <div className="creator-pics">
                    <img
                      className="topcreatorbg-img "
                      src={`https://phantom-rk5i.onrender.com/creators/${item.bckgrndimg}`}
                      alt="backgroundImage"
                    />
                    <br />

                    <img
                      className=" creator-img"
                      src={`https://phantom-rk5i.onrender.com/creators/${item.creatorimg}`}
                      alt="creatorImage"
                    />
                  </div>
                  <div className="creator-name ">
                    {item.creatorName}

                    <div className="creator-bio">{item.description}</div>
                  </div>
                  <button
                    className="creator-button button  collection-button"
                    disabled={followedCreators.includes(item._id)}
                    onClick={() => followCreator(item._id)}
                  >
                    {followedCreators.includes(item._id)
                      ? "Followed"
                      : "+ Follow"}
                  </button>
                </div></div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Topcreator;

import React from 'react'
import './Topcreator.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

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
    alert(`You followed ${data.find(item => item._id === creatorId).creatorName}`);
  };

  return (
    <>
      <div className='colle'>
        Top Creator<br />
        <p className='desc'>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit.</p>

        <div className='mappingdata'>
          {data.map((item, index) => {
            return (
              <div className='pics' key={index}>
                <div className='sizeofimage'>
                  <img className="nft-img" src={`https://phantom-rk5i.onrender.com//${item.bckgrndimg}`} alt="backgroundImage" />
                  <br />
                </div>
                <img className="nft-img" src={`https://phantom-rk5i.onrender.com//${item.creatorimg}`} alt="creatorImage" />
                <div className='infopart'>
                  <div className='creator'>
                    <p className='firstpart-creator'>{item.creatorName}</p>
                  </div>

                  <div className='names'>
                    {item.description}
                  </div>
                  <button
                    className='button collection-button'
                    disabled={followedCreators.includes(item._id)}
                    onClick={() => followCreator(item._id)}
                  >
                    {followedCreators.includes(item._id) ? 'Followed' : '+ Follow'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Topcreator;

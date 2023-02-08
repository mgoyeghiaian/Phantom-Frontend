import React from 'react'
import './Featured_artworks.css'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

function Featured_artworks() {
  const [data, setData] = useState([]);

  const showdeatils = (id) => {
    alert("You placed a bid")
  }
  useEffect(() => {
    axios.get('http://localhost:3030/nft/nfts/')
      .then(response => setData(response.data))
  }, []);

  const sortedData = data.sort((a, b) => {
    return new Date(b.updatedAt) - new Date(a.updatedAt);
  });

  const lastThree = sortedData.slice(0, 3);
  console.log(lastThree);

  return (
    <>
      <br />
      <br />
      <div className='colle'>
        Featured ArtWork Dashboard<br /><p className='desc'>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit.</p>
      </div>
      {
        <div className='mappingdata'>
          {lastThree.map((item) => {
            return (
              <div className='pics' key={item}>
                <img className="nft-img" alt="artwork" src={`http://localhost:3030/nft/nfts/${item.image}`} />
                <br />
                <div className='creator'>
                  <p className='firstpart-creator' > @{item.designerName}</p>
                  <p className='secondpart-creator'>Current Bid</p>
                </div>
                <div className='bid'>{item.currentBid} eth</div>
                <div className='names' >
                  {item.nftName}
                </div>
                <br />
                <button className=' button collection-button' onClick={(e) => showdeatils(item.id)} >Place a Bid</button>
              </div>
            )
          })}
        </div>
      }
      <br />
    </>
  )
}

export default Featured_artworks

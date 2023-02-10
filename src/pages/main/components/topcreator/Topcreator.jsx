import React from 'react'
import './Topcreator.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
function Topcreator() {

  const [data, setCreator] = useState([])

  const followCreator = (id) => {
    alert("You placed a bid")
  }

  useEffect(() => {
    loadCreator()
  }, []);

  const loadCreator = async () => {
    const res = await axios.get("http://localhost:3030/creators")
    setCreator(res.data);
  };


  return (
    <>
    <div className='colle'>
      Top Creator<br />
      <p className='desc'>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit.</p>

      {

        <div className='mappingdata'>
          {data.map((item, index) => {

            return (

              <div className='pics' key={index}>
                <div className='sizeofimage'>
                  
                  <img className="nft-img" src={`http://localhost:3030/creators/${item.bckgrndimg}`} alt="backgroundImage" />
                  <br />
                </div>
                <img className="nft-img" src={`http://localhost:3030/creators/${item.creatorimg}`} alt="creatorImage" />
                <div className='infopart'>
                  <div className='creator'>
                    <p className='firstpart-creator' > {item.creatorName}</p>
                  </div>

                  <div className='names' >
                    {item.description}
                  </div>
                  <button className=' button collection-button' onClick={() => followCreator(item._id)} >+ Follow</button>

                </div>

              </div>
            )
          })}
        </div>


      }
    </div>
    </>
  )
}

export default Topcreator
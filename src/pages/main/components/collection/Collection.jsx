import React from 'react'
import './Collection.css'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'


function Collection() {


  const [collection, setCollection] = useState('art')
  const [data, setNft] = useState([])


  const selectedCollection = (e) => {
    console.log(e.target.name);
    e.preventDefault();
    setCollection(e.target.name)

  }

  const showdeatils = (id) => {
    alert("You placed a bid")
  }



  useEffect(() => {
    loadNft()
  }, []);


  const loadNft = async () => {
    const res = await axios.get("http://localhost:3030/nft/nfts/")

    console.log(res.data);
    setNft(res.data);


  };
  return (
    <>
      <body>
        <div className='colle'>Collection <br /><p className='desc'>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit.</p>


        </div>
        <div className='navbar-nfts'>
          <button name='art' className='btn1' onClick={selectedCollection} >Art</button>
          <button name='sport' className='btn2' onClick={selectedCollection}>Sport</button>
          <button name='photography' className='btn3' onClick={selectedCollection}>Photography</button>
          <button name='pattern' className='btn4' onClick={selectedCollection}>Pattern</button>
        </div>
        {

          <div className='mappingdata'>
            {data.filter(item => item.category === collection).map((item, index) => {

              return (

                <div className='pics' key={index}>
                  <div className='sizeofimage'>
                    <img className="nft-img" src={`http://localhost:3030/nft/nfts/${item.image}`} alt="img" />
                    <br />
                  </div>
                  <div className='infopart'>
                    <div className='creator'>
                      <p className='firstpart-creator' > @{item.designerName}</p>
                      <p className='secondpart-creator'>Current Bid</p>
                    </div>

                    <div className='bid'>{item.currentBid} eth</div>
                    <div className='names' >
                      {item.nftName}
                    </div>
                    <br />
                    <button className=' button collection-button' onClick={(e) => showdeatils(item._id)} >Place a bid</button>
                  </div>
                </div>
              )
            })}
          </div>

        }
      </body>
    </>
  )

}

export default Collection
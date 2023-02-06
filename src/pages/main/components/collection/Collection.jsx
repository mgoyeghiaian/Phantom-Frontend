
import React from 'react'
import './Collection.css'
import Data from './static/indexx'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link, useParams } from "react-router-dom";


function Collection() {

  
  const [collection, setCollection] = useState('art')
  const[data,setNft]=useState([])


  const selectedCollection = (e) => {
    console.log(e.target.name);
    e.preventDefault();
    setCollection(e.target.name)
    
  }
   
  const showdeatils=(id)=>{
    alert("You placed a bid")
  }
  
 

  useEffect(() => {
    loadNft()
    },[]);

    
   const loadNft=async()=>{
    const res= await axios.get("http://localhost:3030/nft/nfts/")
    
        console.log(res.data);
        setNft(res.data);
        
      
  };
  return (
    <>
    <body>
    <div className='collection'>Collection <br/><p className='desc'>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit.</p>
   
    
    </div>
    <div className='navbar-nfts'>
      <button name='art' className='btn1' onClick={selectedCollection} >Art</button>
      <button name='sport' className='btn2' onClick={selectedCollection}>Sport</button>
      <button name='photography' className='btn3' onClick={selectedCollection}>Photography</button>
      <button name='pattern' className='btn4' onClick={selectedCollection}>Pattern</button>
    </div>
    {
     
      <div className='nfts'>
    {data.map((item,index)=>{
      return(
        <div className='pics'key={index}>
          <img className ="nft-img" src={`http://localhost:3030/nft/nfts/${item.image}`} /> 
          <br/>
          <div className='creator'>
           <p className='firstpart-creator' > @{item.designerName}</p>
            <p className='secondpart-creator'>Current Bid</p>
            </div>
            
            <div className='bid'>{item.currentBid} eth</div>
            <div className='names' >
            {item.nftName}
            </div>
            <br/>
            <button className=' button collection-button' onClick={(e)=>showdeatils(item._id)} >Place a bid</button>
            
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
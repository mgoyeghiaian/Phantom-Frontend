import React from 'react'
import './Featured_artworks.css'
import Data from './static/indexx.js'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { json, Link, useParams } from "react-router-dom";




  
 
function Featured_artworks() {
  
  const[data,setNft]=useState([])

  useEffect(() => {
    loadNft()
    },[]);


  //fetch the data from mongoose
  const loadNft=async()=>{
  const res= await axios.get("http://localhost:3030/nft/nfts/")
  setNft(res.data);
  
  };



  const showdeatils=(id)=>{
    alert("You placed a bid")
  }
 
  
  

  

  return (
    <>
    <br/>
    <br/>
    <div className='collection'>
    Featured ArtWork Dashboard<br/><p className='desc'>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit.</p>
  </div>
  
    {/* mapping the data  */}

    {
     
     <div className='mappingdata'>
       {data.map((item,index)=>{
         
       return(
        
         <div className='pics'key={item.index=0 && item.index<3}>
          {console.log("indexx",)}
           <img className ="nft-img" src={`http://localhost:3030/nft/nfts/${item.image}`} alt="img" />  
           <br/>
           
           <div className='creator'>
           <p className='firstpart-creator' > @{item.designerName}</p>
             <p className='secondpart-creator'>Current Bid</p>
             </div>
             
             <div className='bid'>{item.currentBid} eth</div>
             <div className='names' >
             {item.nftName}
             </div>
             
             <button className=' button collection-button' onClick={() =>showdeatils()  } >Place a Bid</button>
             
         </div>
       )
       })}
     </div>
  
   }
  
 
  </>
  )
}

export default Featured_artworks
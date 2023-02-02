import React from 'react'
import './Featured_artworks.css'
import Data from './static/indexx.js'
function Featured_artworks() {
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
  {
     
     <div className='nfts'>
   {Data.map((item,index)=>{
     return(
       <div className='pics'key={index}>
         <img className ="nft-img" src={item.imgSrc} /> 
         <br/>
         <div className='creator'>
          <p className='firstpart-creator'> @{item.creator}</p>
           <p className='secondpart-creator'>Current Bid</p>
           </div>
           
           <div className='bid'>{item.current} eth</div>
           <div className='names'>
           {item.name}
           </div>
           <br/>
           <button className=' button collection-button' onClick={(e)=>showdeatils(item.id)} >Place a Bid</button>
           
           </div>
     )
   })}
   </div>
  
 }
 <br/>
  </>
  )
}

export default Featured_artworks
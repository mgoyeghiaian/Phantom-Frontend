import React from 'react'
import './Collection.css'
import Data from './static/indexx'
import { useState } from 'react'
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

function Collection() {
  const [collection, setCollection] = useState('art')

  const selectedCollection = (e) => {
    console.log(e.target.name);
    e.preventDefault();
    setCollection(e.target.name)
  }
    const alertt=props=>{
      <div>
        <button onClick={props.click}>test</button>
        </div>
    }
  

  return (
    <>
    <div className='collection'>Collection<br/><p className='desc'>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit.</p></div>
    <div className='navbar-nfts'>
      <button name='art' className='btn1' onClick={selectedCollection} >Art</button>
      <button name='sport' className='btn2' onClick={selectedCollection}>Sport</button>
      <button name='photography' className='btn3' onClick={selectedCollection}>Photography</button>
      <button name='pattern' className='btn4' onClick={selectedCollection}>Pattern</button>
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
            <button className=' button collection-button' click={()=>alertt()} >Place a bid</button>
            </div>
          
       
      )
    })}
    </div>
   
  }
   </>
  )
  
}

export default Collection
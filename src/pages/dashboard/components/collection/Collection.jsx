
import React from 'react'
import './Collection.css'
import Data from './static/indexx'
import { useState } from 'react'



function Collection() {
  const [collection, setCollection] = useState('art')
  
  const selectedCollection = (e) => {
    console.log(e.target.name);
    e.preventDefault();
    setCollection(e.target.name)
  }

  return (
    <>
    <div className='collection'>
    Collection Dashboard<br/><p className='desc'>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit.</p>
  <a href='#form'>
    < button className=' button coll-btn' >Add</button>
    </a>
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
            <a href='#form'>
            <button className=' button collection-button'  >Update</button>
            </a>
            <button className=' button collection-button' >Delete</button>
            </div>
      )
    })}
    </div>
   
  }
  </div>
  <div className='formm' id='form'>
    <br/>
    <br/>
<form className='first-form'>
  <br/>
  <legend className='legendd'>Add NFTS</legend>
  <br/>
  <label>Enter an NFT name: <br/><input type='text'></input></label>
  <br/>
  <label>Designer name: <br/><input type='text'></input></label>
  <br/>
  <label>Current Bid: <br/><input type='text'></input></label>
  <br/>
  <label id="nft-img">NFT Image: <br/><input type='file' id="imgg"></input></label>
  <br/>
  <label for="type">Choose a type for the NFT:</label>
  <br/>
<select id="typee" name="typee">
  <option value="art">art</option>
  <option value="sport">sport</option>
  <option value="photography">photography</option>
  <option value="pattern">pattern</option>
</select>
<br/>
<br/>
<input type="submit" value="Submit" id="submit" className='button'></input>
<br/>
  </form>
  
  <form className='second-form'>
    <br/>
  <legend className='legendd'>Update NFTS</legend>
  <br/>
  <label>Enter an NFT name: <br/><input type='text'></input></label>
  <br/>
  <label>Designer name: <br/><input type='text'></input></label>
  <br/>
  <label>Current Bid: <br/><input type='text'></input></label>
  <br/>
  <label id="nft-imgg">NFT Image: <br/><input type='file' id="imgg"></input></label>
  <br/>
  <label for="type">Choose a type for the NFT:</label>
  <br/>
<select id="typeee" name="typee">
  <option value="art">art</option>
  <option value="sport">sport</option>
  <option value="photography">photography</option>
  <option value="pattern">pattern</option>
</select>
<br/>
<br/>
<input type="submit" value="Update" id="submitt" className='button'></input>
<br/>
  </form>
  </div>
   </>
  )
  
}

export default Collection
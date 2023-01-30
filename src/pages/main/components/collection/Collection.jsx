import React from 'react'
import './Collection.css'
import Img1 from './images/collection2.svg'
import Img2 from './images/collection3.svg'
import Img3 from './images/collection5.svg'
import Img4 from './images/Rectangle6.svg'


function Collection() {
let data=[{
  id:1,
  imgSrc:Img1,
  type:'sport',
  creator:'Ahmad',
  creatorimg:Img1,
  current:0.05,
  name:'yellow'
},
{
  id:2,
  imgSrc:Img2,
  type:'art',
  creatorimg:Img1,
  creator:'Rasha',
  
  current:0.05,
  name:'yellow'
},
{
  id:3,
  imgSrc:Img3,
  type:'photography',
  creatorimg:Img1,
  creator:'Rasha',
  
  current:0.05,
  name:'yellow'
},
{
  id:4,
  imgSrc:Img4,
  type:'pattern',
  creatorimg:Img1,
  creator:'Rasha',
  
  current:0.05,
  name:'yellow'
},
{
  id:5,
  imgSrc:Img1,
  type:'pattern',
  creatorimg:Img2,
  creator:'Rasha',
  currentbid:"current Bid",
  current:0.05,
  name:'yellow'
},
{
  id:6,
  imgSrc:Img2,
  type:'pattern',
  creatorimg:Img1,
  creator:'Rasha',
 
  current:0.05,
  name:'yellow'
}

]

  return (
    <>
    <div className='collection'>Collection</div>
    {
     
      <div className='nfts'>
    {data.map((item,index)=>{
      return(
        <div className='pics'key={index}>
          <img className ="nft-img" src={item.imgSrc}/> 
          <br/>
          <div className='creator'>
           <p className='firstpart-creator'> @{item.creator}</p>
            <p className='secondpart-creator'>"Current Bid"</p>
            </div>
            
            <div className='bid'>{item.current}" eth"</div>
            <div className='names'>
            {item.name}
            </div>
            </div>
          
       
      )
    })}
    </div>
   
  }
   </>
  )
  
}

export default Collection
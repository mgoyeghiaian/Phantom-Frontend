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
  
  current:0.05,
  name:'Yellow Painting'
},
{
  id:2,
  imgSrc:Img2,
  type:'art',
  
  creator:'Rasha',
  
  current:0.05,
  name:'Yellow Painting'
},
{
  id:3,
  imgSrc:Img3,
  type:'photography',
  
  creator:'Rasha',
  
  current:0.05,
  name:'Yellow Painting'
},
{
  id:4,
  imgSrc:Img4,
  type:'pattern',
  
  creator:'Rasha',
  
  current:0.05,
  name:'Yellow Painting'
},
{
  id:5,
  imgSrc:Img1,
  type:'pattern',

  creator:'Rasha',
  currentbid:"current Bid",
  current:0.05,
  name:'Yellow Painting'
},
{
  id:6,
  imgSrc:Img2,
  type:'pattern',
  creatorimg:Img1,
  creator:'Rasha',
 
  current:0.05,
  name:'Yellow Painting'
}

]


const btnfn=()=>{
  var a=document.getElementById("btn1");
  var b=document.getElementById("btn2");
  var c=document.getElementById("btn3");
  var d=document.getElementById("btn4");
  if(a){
    //"#"+(47).toString(16)+(52).toString(16)+(70).toString(16);;
    a.style.backgroundColor="purple"
  }
  else if(b){
    //"#"+(47).toString(16)+(52).toString(16)+(70).toString(16);;
    b.style.backgroundColor="blue"
  }
  else if(c){
    //"#"+(47).toString(16)+(52).toString(16)+(70).toString(16);;
    c.style.backgroundColor="blue"
  }
  else if(d){
    //"#"+(47).toString(16)+(52).toString(16)+(70).toString(16);;
    d.style.backgroundColor="blue"
  }
}

  return (
    <>
    <div className='collection'>Collection<br/><p className='desc'>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit.</p></div>
    <div className='navbar-nfts'>
      <button id="btn1" className='btn1' onClick={btnfn} >Art</button>
      <button id="btn2" className='btn2' onClick={btnfn}>Sport</button>
      <button id="btn3" className='btn3' onClick={btnfn}>Photography</button>
      <button id="btn4" className='btn4' onClick={btnfn}>Pattern</button>
    </div>
    {
     
      <div className='nfts'>
    {data.map((item,index)=>{
      return(
        <div className='pics'key={index}>
          <img className ="nft-img" src={item.imgSrc}/> 
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
            <button className='button'>Place a bid</button>
            </div>
          
       
      )
    })}
    </div>
   
  }
   </>
  )
  
}

export default Collection
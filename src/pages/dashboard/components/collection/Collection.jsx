import React from 'react'
import "./Collection.css"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";


function Collection({ match }) {


  const [collection, setCollection] = useState('art');
  const [nftCollection, postNft] = useState("")
  const [data, setNft] = useState([])
  const [nftName, setNftNamee] = useState("")
  const [designerName, setNftdesigner] = useState("")
  const [currentBid, setNftcurrentBid] = useState("")
  const [category, setNftcategory] = useState("")
  const [idd, setidd] = useState("")

  useEffect(() => {
    loadNft()
  }, []);

  useEffect(() => {
    loadNftbyId()
  }, []);




  const selectedCollection = (e) => {
    console.log(e.target.name);
    e.preventDefault();
    setCollection(e.target.name)




  }

  const addNFT = (e) => {
    if (e.target.name === "nftImage")
      postNft({ ...nftCollection, [e.target.name]: e.target.files[0] });

    else
      postNft({ ...nftCollection, [e.target.name]: e.target.value });


  };



  const loadNft = async () => {
    const res = await axios.get("https://phantom-rk5i.onrender.com/nft/nfts/")
    setNft(res.data);


  };

  const loadNftbyId = async (id) => {
    const res = await axios.get(`https://phantom-rk5i.onrender.com/nft/nftss/${id}`)
    console.log(res);
    setNftNamee(res.data.nftName);
    setNftdesigner(res.data.designerName)
    setNftcurrentBid(res.data.currentBid)
    setNftcategory(res.data.category)
    setidd(res.data._id)


  };

  const deleteNft = async (id) => {
    await axios.delete(`https://phantom-rk5i.onrender.com/nft/nfts/${id}`)
    loadNft()
    alert("You have update it!")
    window.location.reload(true);
  }

  const AddNFTAxios = async (e) => {
    e.preventDefault();
    console.log("nftcollectio ", nftCollection)
    let formData = new FormData();
    formData = nftCollection;
    console.log("nftcollection ", nftCollection)


    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }
    console.log("newNFT ", formData);

    try {
      const response = await axios.post("https://phantom-rk5i.onrender.com/nft/nfts/", formData, config);
      alert("You have add an Nft it!")
      window.location.reload(true);
      console.log("response ", response)
    } catch (err) {
      console.log("error", err);
    }
  };





  const UpdateNFTAxios = async (e) => {
    e.preventDefault();
    let postupdate = { nftName, designerName, currentBid, category }
    console.log("nftcollection ", nftName, designerName, currentBid, category)

    try {
      console.log("id" + idd)
      const response = await axios.put(`https://phantom-rk5i.onrender.com/nft/nfts/${idd}`, {
        nftName,
        designerName,
        currentBid,
        category
      });
      alert("You have update it!")
      window.location.reload(true);
      console.log("updatedddd", response)


    }
    catch (err) {
      console.log("error" + err)
    }
  }

  return (
    <>
      <div className='colle'>
        Collection Dashboard<br />
        <p className='desc'>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit.</p>
        <a
          href="/dashboard" onClick={e => {
            let form = document.getElementById("form");
            e.preventDefault();
            form && form.scrollIntoView();
          }}
        >
          <button className=' button coll-btn' >Add</button>
        </a>
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
                    <img className="nft-img" src={`https://phantom-rk5i.onrender.com/nft/nfts/${item.image}`} alt="img" />
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
                    <a href="/dashboard" onClick={e => {
                      let form = document.getElementById("form");
                      e.preventDefault();
                      form && form.scrollIntoView();
                    }}>
                      <button className=' button collection-button' onClick={() => loadNftbyId(item._id)} >Update</button>
                    </a>
                    <button className=' button collection-button' onClick={() => deleteNft(item._id)} >Delete</button>

                  </div>

                </div>
              )
            })}
          </div>


        }
      </div>
      <div className='formm' id='form'>
        <br />
        <br />

        <form className='first-form' onSubmit={AddNFTAxios}>
          <br />
          <legend className='legendd'>Add NFTS</legend>
          <br />

          <label >Enter an NFT name: <br /><input type='text' name="nftName" value={nftCollection.nftName} onChange={addNFT} required></input></label>
          <br />
          <label >Designer name: <br /><input type='text' name="designerName" value={nftCollection.designerName} onChange={addNFT} required></input></label>
          <br />
          <label>Current Bid: <br /><input type='text' name="currentBid" value={nftCollection.currentBid} onChange={addNFT} required></input></label>
          <br />
          <label id="nft-img" >NFT Image: <br /><input type='file' id="imgg" name="nftImage" value={nftCollection.image} onChange={addNFT} required></input></label>
          <br />
          <label for="type">Choose a type for the NFT:</label>
          <br />
          <select id="typee" name="category" value={nftCollection.category} onChange={addNFT} >
            <option selected></option>
            <option value="art" >art</option>
            <option value="sport">sport</option>
            <option value="photography">photography</option>
            <option value="pattern">pattern</option>
          </select>
          <br />
          <br />
          <input type="submit" value="Submit" id="submit" className='button'></input>
          <br />
        </form>



        <form className='second-form' onSubmit={UpdateNFTAxios}>
          <br />
          <legend className='legendd'>Update NFTS</legend>
          <br />

          <label >Enter an NFT name: <br /><input type='text' name="nftName" value={nftName} onChange={(e) => setNftNamee(e.target.value)} ></input></label>
          <br />
          <label >Designer name: <br /><input type='text' name="designerName" value={designerName} onChange={(e) => setNftdesigner(e.target.value)} ></input></label>
          <br />
          <label>Current Bid: <br /><input type='text' name="currentBid" value={currentBid} onChange={(e) => setNftcurrentBid(e.target.value)} ></input></label>
          <br />
          {/* <label id="nft-img" >NFT Image: <br/><input type='file' id="imgg" name="nftImage" onChange={updateNFT} ></input></label>
    <br/>  */}
          <label for="type">Choose a type for the NFT:</label>
          <br />
          <select id="typeee" name="category" value={category} onChange={(e) => setNftcategory(e.target.value)} >
            <option value="art" selected>art</option>
            <option value="sport" >sport</option>
            <option value="photography" >photography</option>
            <option value="pattern" >pattern</option>
          </select>
          <br />
          <br />
          <input type="submit" value="Submit" id="submit" className='button'></input>
          <br />
        </form>



      </div>
    </>
  )

}

export default Collection





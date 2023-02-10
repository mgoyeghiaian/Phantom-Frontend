import React from 'react'
import '../collection/Collection.css'
import { useState, useEffect } from 'react'
import axios from 'axios'


function Topcreator() {


  const [cratorCollection, postcreator] = useState("")
  const [data, setCreatot] = useState([])

  useEffect(() => {
    loadCreator()
  }, []);

  const addNFT = (e) => {
    if (e.target.name === "creatorimg")
      postcreator({ ...cratorCollection, [e.target.name]: e.target.files[0] });

    else
      postcreator({ ...cratorCollection, [e.target.name]: e.target.value });
  };




  const loadCreator = async () => {
    const res = await axios.get("http://localhost:3030/creators")
    setCreatot(res.data);


  };



  const deleteNft = async (id) => {
    await axios.delete(`http://localhost:3030/creators${id}`)
    loadCreator()
    alert("You have update it!")
    window.location.reload(true);
  }

  const AddCreatorAxios = async (e) => {
    e.preventDefault();
    console.log("cratorCollection ", cratorCollection)
    let formData = new FormData();
    formData = cratorCollection;
    console.log("cratorCollection ", cratorCollection)
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }
    console.log("NewCreators ", formData);
    try {
      const response = await axios.post("http://localhost:3030/creators", formData, config);
      alert("You Added the creator")
      window.location.reload(true);
      console.log("response ", response)
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <>
      <div className='colle'>
        Top Creator<br />
        <p className='desc'>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit.</p>
        <a href='#form'>
          <button className=' button coll-btn' >Add</button>
        </a>

        {

          <div className='mappingdata'>
            {data.map((item, index) => {

              return (

                <div className='pics' key={index}>
                  <div className='sizeofimage'>
                    <img className="nft-img" src={`http://localhost:3030/creators${item.bckgrndimg}`} alt="img" />
                    <br />
                  </div>
                  <img className="nft-img" src={`http://localhost:3030/creators${item.creatorimg}`} alt="img" />
                  <div className='infopart'>
                    <div className='creator'>
                      <p className='firstpart-creator' > {item.creatorName}</p>
                    </div>

                    <div className='names' >
                      {item.description}
                    </div>
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

        <form className='first-form' onSubmit={AddCreatorAxios}>
          <br />
          <legend className='legendd'>Add Creator</legend>
          <br />
          <label > Top Creator Name: <br /><input type='text' name="creatorName" value={cratorCollection.creatorName} onChange={addNFT} required></input></label>
          <br />
          <label >Discription: <br /><input type='text' name="designerName" value={cratorCollection.description} onChange={addNFT} required></input></label>
          <br />
          <br />
          <label id="nft-img" >background Image: <br /><input type='file' id="imgg" name="nftImage" value={cratorCollection.bckgrndimg} onChange={addNFT} required></input></label>
          <br />
          <br />
          <label id="nft-img" >designer Image: <br /><input type='file' id="imgg" name="nftImage" value={cratorCollection.creatorimg} onChange={addNFT} required></input></label>
          <br />
          <br />
          <input type="submit" value="Submit" id="submit" className='button'></input>
          <br />
        </form>




      </div>
    </>
  )

}

export default Topcreator
import React from 'react'
import '../collection/Collection.css'
import './Topcreator.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
function Topcreator() {

  const [creatorName, setCreatorName] = useState("");
  const [description, setDescription] = useState("");
  const [creatorimg, setCreatorimg] = useState(null);
  const [bckgrndimg, setBckgrndimg] = useState(null);
  const [data, setCreator] = useState([])



  useEffect(() => {
    loadCreator()
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("creatorName", creatorName);
    formData.append("description", description);
    formData.append("creatorimg", creatorimg);
    formData.append("bckgrndimg", bckgrndimg);

    try {
      await axios.post("http://localhost:3030/creators", formData);
      alert("Post submitted successfully!");
      window.location.reload(true);

    } catch (error) {
      console.error(error);
      alert("Failed to submit post.");
    }
  };




  const loadCreator = async () => {
    const res = await axios.get("http://localhost:3030/creators")
    setCreator(res.data);


  };



  const deleteCreator = async (id) => {
    await axios.delete(`http://localhost:3030/creators/${id}`)
    loadCreator()
    alert("You have delete it!")
    window.location.reload(true);
  }

  return (
    <>
      <div className='colle'>
        Top Creator<br />
        <p className='desc'>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit.</p>
        <a href='#formcreators'>
          <button className=' button coll-btn' >Add</button>
        </a>

        {

          <div className='mappingdata'>
            {data.map((item, index) => {

              return (

                <div className='pics' key={index}>
                  <div className='sizeofimage'>

                    <img className="nft-img" src={`http://localhost:3030/creators/${item.bckgrndimg}`} alt="backgroundImage" />
                    <br />
                  </div>
                  <img className="creator-img" src={`http://localhost:3030/creators/${item.creatorimg}`} alt="creatorImage" />
                  <div className='infopart'>
                    <div className='creator'>
                      <p className='firstpart-creator' > {item.creatorName}</p>
                    </div>

                    <div className='names' >
                      {item.description}
                    </div>
                    <button className=' button collection-button' onClick={() => deleteCreator(item._id)} >Delete</button>

                  </div>

                </div>
              )
            })}
          </div>


        }
      </div>
      <div className='formm creators-form' id='formcreators'>
        <br />
        <br />

        <form className='first-form ' onSubmit={handleSubmit}>
          <br />
          <legend className='legendd'>Add Creator</legend>
          <br />
          <label > Top Creator Name: <br /> <input
            value={creatorName}
            onChange={(e) => setCreatorName(e.target.value)}
            placeholder="Enter text"
          /></label>
          <br />
          <label >Discription: <br /> <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter text"
          /></label>
          <br />
          <br />
          <label id="nft-img" >background Image: <br /><input
            type="file"
            id="imgg"
            onChange={(e) => setBckgrndimg(e.target.files[0])}
          />
          </label>
          <br />
          <label id="nft-img" >Creator Image: <br />
            <br />
            <input
              id="imgg"
              type="file"
              onChange={(e) => setCreatorimg(e.target.files[0])}
            />
          </label>
          <br />
          <input type="submit" value="Submit" id="submit" className='button'></input>
          <br />
          <br />
        </form>
      </div >
    </>
  )

}

export default Topcreator
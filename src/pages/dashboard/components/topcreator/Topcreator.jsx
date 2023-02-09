import React from "react";
import "./Topcreator.css";
// import Data from './static/indexx'
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Creator() {
  const [creator, setCreator] = useState([]);
  const [creatorCollection, postCollection] = useState("");

  useEffect(() => {
    fetchingCreators();
  }, []);

  const fetchingCreators = async () => {
    const response = await axios.get("http://localhost:3030/creators/");

    console.log(response.data);
    setCreator(response.data);
    console.log("Hello");
  };
  const addCreator = (e) => {
    if (e.target.name == "creatorimg" || e.target.name == "bckgrndimg" ) {
      postCollection({ ...creatorCollection, [e.target.name]: e.target.files[0] });
      console.log(creatorCollection);
    } else postCollection({ ...creatorCollection, [e.target.name]: e.target.value });
  };

  return (
    <>
      <dev className="main-creator-dashboard">
        {/* SECTION ADD CREATOR */}
        <dev className="Add-creator">
          <form className="first-table">
            <br />
            <legend className="legendd-creator-dashboard">Add Creator</legend>
            <br />
            <label>
              Enter an Creator name:
              <br />
              <input
                type="text"
               
                name = "name"
                value= {creatorCollection.name}
                onchange = {addCreator}
                
                
              />
            </label>
            <br />
            <label>
              Creator description <br />
              <input type="text"
              name= "descrip"
              value = {creatorCollection.descrip}
              onchange = {addCreator}


              
              ></input>
            </label>
            <br />
            <label className="creator-image-dashboard">
              Creator Image:
              <br />
              <input type="file"
              id="pics"
              name="creatorimg"
              value = {creatorCollection.image}
              onChange = {addCreator}
              ></input>
            </label>
            <br />
            <label className="creator-background-dashboard">
              {" "}
              background Image:
              <br />
              <input input type="file"
              id="pics"
              name="bckgrndimg"
              value = {creatorCollection.image}
              onChange = {addCreator}></input>
            </label>
            <br />

            <input
              type="submit"
              value="Submit"
              id="submitss"
              className="button"
            ></input>
            <br />
          </form>
        </dev>

        {/* // SECOND FORM */}

        <dev className="update-creator">
          <form className="second-table">
            <br />
            <legend className="legendd-creator-dashboard">
              Update Creator
            </legend>
            <br />
            <label>
              Enter an Creator name: <br />
              <input type="text"></input>
            </label>
            <br />
            <label>
              Creator description <br />
              <input type="text"></input>
            </label>
            <br />
            <label className="creator-image-dashboard">
              Creator Image:
              <br />
              <input type="file"></input>
            </label>
            <br />
            <label className="creator-background-dashboard">
              {" "}
              background Image:
              <br />
              <input type="file"></input>
            </label>
            <br />

            <input
              type="submit"
              value="Update"
              id="submit"
              className="button"
            ></input>
            <br />
          </form>
        </dev>
      </dev>
    </>
  );
}

export default Creator;

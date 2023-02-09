import React from "react";
import "./Collection.css";
import Data from "./static/indexx";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Collection() {
  const { id } = useParams();

  const [collection, setCollection] = useState("art");
  const [nftCollection, postNft] = useState("");
  const [data, setNft] = useState([]);

  useEffect(() => {
    loadNft();
  }, []);

  const selectedCollection = (e) => {
    console.log(e.target.name);
    e.preventDefault();
    setCollection(e.target.name);
  };

  const addNFT = (e) => {
    if (e.target.name == "nftImage") {
      postNft({ ...nftCollection, [e.target.name]: e.target.files[0] });
      console.log(nftCollection);
    } else postNft({ ...nftCollection, [e.target.name]: e.target.value });
  };

  const loadNft = async () => {
    const res = await axios.get("http://localhost:3030/nft/nfts/");
    setNft(res.data);
  };

  const deleteNft = async (id) => {
    await axios.delete(`http://localhost:3030/nft/nfts/${id}`);
    loadNft();
  };

  const AddNFTAxios = async (e) => {
    e.preventDefault();
    console.log("nftcollectio ", nftCollection);
    let formData = new FormData();
    formData = nftCollection;
    console.log("nftcollection ", nftCollection);

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    console.log("newNFT ", formData);

    try {
      const response = await axios.post(
        "http://localhost:3030/nft/nfts/",
        formData,
        config
      );
      console.log("response ", response);
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <>
      <div className="collection">
        Collection Dashboard
        <br />
        <p className="desc">
          Lorem ipsum dolor sit amet, consectetur <br />
          adipiscing elit.
        </p>
        <a href="#form">
          <button className=" button coll-btn">Add</button>
        </a>
        <div className="navbar-nfts">
          <button name="art" className="btn1" onClick={selectedCollection}>
            Art
          </button>
          <button name="sport" className="btn2" onClick={selectedCollection}>
            Sport
          </button>
          <button
            name="photography"
            className="btn3"
            onClick={selectedCollection}
          >
            Photography
          </button>
          <button name="pattern" className="btn4" onClick={selectedCollection}>
            Pattern
          </button>
        </div>
        {
          <div className="nfts">
            {data.map((item, index) => {
              return (
                <div className="pics" key={index}>
                  <img
                    className="nft-img"
                    src={`http://localhost:3030/nft/nfts/${item.image}`}
                    alt="img"
                  />
                  <br />
                  <div className="creator">
                    <p className="firstpart-creator"> @{item.designerName}</p>
                    <p className="secondpart-creator">Current Bid</p>
                  </div>

                  <div className="bid">{item.currentBid} eth</div>
                  <div className="names">{item.nftName}</div>
                  <a href="#form">
                    <button className=" button collection-button">
                      Update
                    </button>
                  </a>
                  <button
                    className=" button collection-button"
                    onClick={() => deleteNft(item._id)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        }
      </div>
      <div className="formm" id="form">
        <br />
        <br />

        <form className="first-form" onSubmit={AddNFTAxios}>
          <br />
          <legend className="legendd">Add NFTS</legend>
          <br />
my parttttttttttttttttttttttttttttttttttttttttttttttttttt 








          <label>
            Enter an NFT name: <br />
            <input
              type="text"
              name="nftName"
              value={nftCollection.nftName}
              onChange={addNFT}
            ></input>
          </label>
          <br />
          <label>
            Designer name: <br />
            <input
              type="text"
              name="designerName"
              value={nftCollection.designerName}
              onChange={addNFT}
            ></input>
          </label>
          <br />
          <label>
            Current Bid: <br />
            <input
              type="text"
              name="currentBid"
              value={nftCollection.currentBid}
              onChange={addNFT}
            ></input>
          </label>
          <br />
          <label id="nft-img">
            NFT Image: <br />
            <input
              type="file"
              id="imgg"
              name="nftImage"
              value={nftCollection.image}
              onChange={addNFT}
            ></input>
          </label>
          <br />
          <label for="type">Choose a type for the NFT:</label>
          <br />
          <select id="typee" name="category" value={nftCollection.category}>
            <option value="art">art</option>
            <option value="sport">sport</option>
            <option value="photography">photography</option>
            <option value="pattern">pattern</option>
          </select>
          <br />
          <br />
          <input
            type="submit"
            value="Submit"
            id="submit"
            className="button"
          ></input>
          <br />
        </form>

        <form className="second-form">
          <br />
          <legend className="legendd">Update NFTS</legend>
          <br />
          <label>
            Enter an NFT name: <br />
            <input type="text"></input>
          </label>
          <br />
          <label>
            Designer name: <br />
            <input type="text"></input>
          </label>
          <br />
          <label>
            Current Bid: <br />
            <input type="text"></input>
          </label>
          <br />
          <label id="nft-imgg">
            NFT Image: <br />
            <input type="file" id="imgg"></input>
          </label>
          <br />
          <label for="type">Choose a type for the NFT:</label>
          <br />
          <select id="typeee" name="category">
            <option value="art">art</option>
            <option value="sport">sport</option>
            <option value="photography">photography</option>
            <option value="pattern">pattern</option>
          </select>
          <br />
          <br />
          <input
            type="submit"
            value="Update"
            id="submitt"
            className="button"
          ></input>
          <br />
        </form>
      </div>
    </>
  );
}

export default Collection;

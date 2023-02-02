import React from 'react'
import './AddUser.css'
import { Link } from 'react-router-dom'
import { HiHome } from "@react-icons/all-files/hi/HiHome";
import { useState } from "react";


function AddUser() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3030/signup", {
        method: 'POST',
        headers: ({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        setErrorMessage('Username Already Exists', response);
      }
      if (!username && !password) {
        setErrorMessage('Please fill the form');
      }

      if (response.ok) {
        setMessage("User added successfully")
      }

    } catch (error) {
      setErrorMessage(error.message || error);
    }



  };

  return (
    <>
      <div className='adduser'>
        <Link to={'/'} className='Home-button-dash'>
          <HiHome />
        </Link>
        <h2>Add New User:</h2>
        {errorMessage && <p className='error-dash' > {errorMessage}</p>}
        {message && <p className='sucsess-dash'>{message}</p>}
        <form onSubmit={handleSubmit} className='adduser-form'>
          <label htmlFor="username"> Username :</label>
          <input type="text"
            onChange={(e) => setUsername(e.target.value)} value={username} placeholder='Username' />
          <label htmlFor="password">Password:</label>
          <input type="password" value={password}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)} />
          <button className="adduser-button button" type="submit">Add User</button>
        </form>
      </div>
    </>
  )
}

export default AddUser;
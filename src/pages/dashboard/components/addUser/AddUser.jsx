import React from 'react'
import './AddUser.css'
import { HiHome } from "@react-icons/all-files/hi/HiHome";
import { useState, useEffect } from "react";


function AddUser() {


  /**  initialize username , password , Error Message And added successfully Message */
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState('');

  /** Posting The New Username and password To the database  */
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://phantom-rk5i.onrender.com/signup", {
        method: 'POST',
        headers: ({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        setErrorMessage('Username Already Exists');
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

    /** to make the error message & the message dispeare after 2 sec */
  }
  useEffect(() => {
    if (!errorMessage && !message) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setErrorMessage("");
      setMessage('');
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [errorMessage, message]);
  return (
    <>
      <div className='adduser'>
        <a href='/' className='Home-button-dash'>
          <HiHome />
        </a>
        <h2>Add New User:</h2>
        {errorMessage && <p className='error-dash' > {errorMessage}</p>}
        {message && <p className='sucsess-dash'>{message}</p>}
        <form autocomplete="off"
          onSubmit={handleSubmit} className='adduser-form'>
          <label htmlFor="username" onsubmit="return "> Username :</label>
          <input type="text"
            onChange={(e) => setUsername(e.target.value)} value={username} placeholder='Username' />
          <label htmlFor="password">Password:</label>
          <input type="password" autoComplete="new-password"
            value={password}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)} />
          <button className="adduser-button button" type="submit">Add User</button>
        </form>
      </div>
    </>
  )
}

export default AddUser;
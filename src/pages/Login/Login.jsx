import { useState } from "react";
import { Link } from "react-router-dom";
import { HiHome } from "@react-icons/all-files/hi/HiHome";

import './login.css'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3030/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        setErrorMessage("error")
        return;
      }

      const { token, error } = await response.json();


      if (error === 'username') {
        setErrorMessage('Incorrect username');
        return;
      }

      if (error === 'password') {
        setErrorMessage('Incorrect password');
        return;
      }
      localStorage.setItem("token", token);
      window.location.href = `/dashboard`;
    } catch (error) {

      setErrorMessage('Error logging in. Please try again.')
    }

  }
  return (
    <>
      <div className="login-body">
        <section className="login-card">

          <div className="login-header">
            <Link to={'/'} className='Home-button '>
              <HiHome />
            </Link>
            <h1>Log In</h1>
          </div>
          <form onSubmit={handleSubmit} className='login-form'>
            <label htmlFor="username">Username:</label>
            <input type="text"
              onChange={(e) => setUsername(e.target.value)} value={username} />

            <label htmlFor="password">Password:</label>
            <input type="password" value={password}
              onChange={(e) => setPassword(e.target.value)} />
            <button className="login-button button" type="submit">Log In</button>
          </form>
        </section>
        <div className="login-error ">
          {errorMessage && <p>{errorMessage}</p>}
        </div>
      </div>
    </>

  )
}

export default Login;
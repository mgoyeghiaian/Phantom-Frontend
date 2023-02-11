import { useState } from "react";
import { useEffect } from "react";
import Cookies from 'js-cookie';
import './login.css'
import { Navigate } from "react-router-dom";
function Login() {


  /**  initialize username and password */
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  /**  initialize error message */
  const [errorMessage, setErrorMessage] = useState('');


  /** Posting username and password and getting the token from the backend */
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://phantom-rk5i.onrender.com/login", {
        method: 'POST',
        headers: ({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({ username, password }),
      });

      if (!username) {
        setErrorMessage('Please enter a username');

        return;
      }

      if (!password) {
        setErrorMessage('Please enter a password');
        return;
      }

      if (!response) {
        setErrorMessage('wrong username or password');
        return;
      }

      /**
       * Getting token 
       */
      const { token } = await response.json();
      //Set Timing For The Cookie
      const time = new Date(new Date().getTime() + 15 * 60 * 1000)

      /** set cookie */
      Cookies.set('jwt_auth', token, {
        expires: time,
        secure: true,
        sameSite: "Strict",
        path: '/dashboard'

      }
      );
      /** redirect to dashboard page */
      window.location.replace('/dashboard');


    } catch (error) {
      setErrorMessage('wrong username or password', error);

    }
  }

  function updateLabel(input) {
    const label = input.nextElementSibling;
    if (input.value.length > 0) {
      input.classList.add("has-value");
      label.classList.add("has-value");
    } else {
      input.classList.remove("has-value");
      label.classList.remove("has-value");
    }
  }

  const inputs = document.querySelectorAll(".input-group input");
  inputs.forEach(input => {
    updateLabel(input);
    input.addEventListener("input", () => updateLabel(input));
  });


  /** Remove the error Message after 2 Sec */

  useEffect(() => {
    if (!errorMessage) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setErrorMessage("");
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [errorMessage]);

  return (
    <>
      <div className="login-body">
        <div className="wrapper">
          <div className="form-wrapper">
            <form autocomplete="off"
              action="" onSubmit={handleSubmit} >
              <div className="input-group">
                <input type='text' onChange={(e) => setUsername(e.target.value)} value={username} />
                <label htmlFor="username"> Username</label>
              </div>
              <div className="input-group" >
                <input type='password' autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
                <label htmlFor="password"> Password</label>
              </div>
              {errorMessage && <p className="login-error">{errorMessage}</p>}
              <button className="login-button" type="submit">Login</button>
              <div className="login-back">
                <p>Back To  The <a href="/">Main</a> Page</p>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>

  )
}

export default Login;
import { Link } from "react-router-dom";
import { HiHome } from "@react-icons/all-files/hi/HiHome";
import { useState } from "react";
import Cookies from 'js-cookie';
import './login.css'

function Login() {
  //initialize cookies



  // initialize username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // initialize error message
  const [errorMessage, setErrorMessage] = useState('');



  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3030/login", {
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



      const { token } = await response.json();
      //Set Timing For The Cookie
      const time = new Date(new Date().getTime() + 15 * 60 * 10)

      //set cookie
      Cookies.set('jwt_auth', token, {
        expires: time,
        secure: true,
        sameSite: "Strict",
        path: '/dashboard'

      }
      );
      //redirect to dashboard page
      window.location.href = "/dashboard";

    } catch (error) {
      setErrorMessage('Bad request', error);

    }
  }

  /*console.log(token)
  localStorage.setItem('token', token);
  window.location.href = '/dashboard';
  } catch (error) {
  setErrorMessage(error.message || error);
  }
  };
  */
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
            <label htmlFor="username">Username</label>
            <input type="text"
              onChange={(e) => setUsername(e.target.value)} value={username} />

            <label htmlFor="password">Password</label>
            <input type="password" value={password}
              onChange={(e) => setPassword(e.target.value)} />
            <button className="login-button button" type="submit">Log In</button>
          </form>
        </section>
        <div className="login-error ">
          {errorMessage && <p> {errorMessage}</p>}
        </div>
      </div>
    </>

  )
}

export default Login;
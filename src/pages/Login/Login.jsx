import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiHome } from "@react-icons/all-files/hi/HiHome";
import './login.css'

function Login(props) {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])


  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = checkCredentials(user, pwd);
    if (isValid) {
      window.location.href = "/dashboard";
    } else {
      setErrMsg("Invalid username or password");
    }

  }
  const checkCredentials = (user, pwd) => {
    // logic to check if username and password exists in database
    return true;
  }

  return (
    <>
      <div className="login-body">
        <section className="login-card">
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          <h1>Log In</h1>
          <Link to={'/'}>
            <button className="Home-button" ><HiHome /></button>
          </Link>
          <form onSubmit={handleSubmit} className='login-form'>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" ref={userRef} autoComplete="off"
              onChange={(e) => setUser(e.target.value)} value={user} required />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password"
              onChange={(e) => setPwd(e.target.value)} value={pwd} required />
            <button className="login-button">Log In</button>
          </form>
        </section>
      </div>
    </>
  )
}

export default Login;
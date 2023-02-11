import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/main/Main'
import Login from './pages/Login/Login'
import Privetroute from './pages/Login/Privetrout';
import Dashboard from './pages/dashboard/Dashboard.jsx'
import RingLoader from 'react-spinners/RingLoader'
import Logo from '../src/assets/websiteicon/PHANTOM (2).svg'


function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {
        loading ?
          <div className='loader'>
            <img src={Logo} alt='logo' />
            <RingLoader
              color="#9228d3"
              cssOverride={null}
              loading
              margin={15}
              size={55}
              speedMultiplier={1.1}
            /> </div> :
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Main />} exact />
              <Route path='/login' element={<Login />} />
              <Route path='/dashboard' element={
                <Privetroute>
                  <Dashboard />
                </Privetroute>
              } />
            </Routes>
          </BrowserRouter>
      }
    </>
  );

}

export default App;

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/main/Main'
import Login from './pages/Login/Login'
import Privetrout from './pages/Login/Privetrout';
import Dashboard from './pages/dashboard/Dashboard'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} exact />
        <Route path='/login' element={<Login />} />
        <Route path="/dashboard" element={
          <Privetrout>
            <Dashboard />
          </Privetrout>
        } />
      </Routes>
    </BrowserRouter>

  );

}

export default App;

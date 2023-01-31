import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/main/Main'
import Login from './pages/Login/Login'
import Dashboard from './pages/dashboard/Dashboard'
import PrivateRoute from "./pages/main/Privetrout";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

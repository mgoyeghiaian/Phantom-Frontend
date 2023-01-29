import { Link } from 'react-router-dom';
import logo from '../../../../assets/websiteicon/PHANTOM (2).svg'
import { FaSearch } from '@react-icons/all-files/fa/FaSearch'
import { FaTimes } from '@react-icons/all-files/fa/FaTimes'
import { HiMenu } from '@react-icons/all-files/hi/HiMenu'
import './Navbar.css'
import { useState } from 'react';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="nav-left">
        <img src={logo} alt="logo" />
      </div>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <HiMenu />
      </div>
      <div className={`menuTimes ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <FaTimes />
      </div>
      <div className={`nav-right ${isOpen ? 'open' : ''}`}>
        <form>
          <button type='submit'><div >
            <FaSearch /></div> </button>
          <input type="text" placeholder="Search items and collections" />
        </form>
        <Link to="#">Collections</Link>
        <Link to="#">Feature</Link>
        <Link to="#">FAQ</Link>
        <Link to={'/login'}>
          <button className='button Login'> Login</button></Link>
      </div>
    </nav>
  );
};

export default Navbar

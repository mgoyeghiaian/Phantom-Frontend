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
    <nav className='navbar'>
      <div className='nav-logo'>
        <a href='/'>
          <img src={logo} alt="logo" />
        </a>
      </div>

      <div className={`nav-right ${isOpen ? 'open' : ''}`}>
        <form className='search-form'>
          <button className='search-button' type='submit'><div >
            <FaSearch /></div> </button>
          <input className='search' type="text" placeholder="Search items and collections" />
        </form>
        <a href="#collection">Collections</a>
        <a href="#featuredartworks">Feature</a>
        <a href="#faq">FAQ</a>
        <Link to={'/login'}>
          <button className='button Login'> Login</button></Link>
      </div>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <HiMenu />
      </div>
      <div className={`menuTimes ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <FaTimes />
      </div>
    </nav>
  );
};

export default Navbar

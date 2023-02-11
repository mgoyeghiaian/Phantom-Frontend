import { Link } from 'react-router-dom';
import logo from '../../../../assets/websiteicon/PHANTOM (2).svg'
import { FaTimes } from '@react-icons/all-files/fa/FaTimes'
import { HiMenu } from '@react-icons/all-files/hi/HiMenu'
import './Navbar.css'
import { useState } from 'react';
import Searchbar from './Searchbar';
const Navbar = () => {

  /**  To open And Close the menu in the mobile vergion  */

  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='navbar'>
      <div className='nav-logo'>
        <a href='/'>
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className={`nav-right ${isOpen ? 'open' : ''}`}>
        <Searchbar />
        <a href="#collection">Collections</a>
        <a href="#featuredartworks">Feature</a>
        <a href="#faq">FAQ</a>
        <a href={'/login'}>
          <button className='button Login'> Login</button></a>
      </div>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <HiMenu />
      </div>
      <div className={`menuTimes ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <FaTimes />
      </div>
    </nav >
  );
};

export default Navbar

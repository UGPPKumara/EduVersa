import React from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';
import './Header.css';
import Logo from '../../../Images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const handleLogout = () => {
    // Perform any necessary cleanup, such as clearing session storage or cookies
    sessionStorage.removeItem('loggedIn');
    
    // Redirect the user to the login page
    window.location.href = '/';
    console.log('Logged out successfully.');
};


  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon'/>
      </div>
      
      <div className='header-left'>
        <img src={Logo} alt='EduVersa' className='header-logo'/>
        <BsSearch className='icon'/>
      </div>
      
      <div className='header-right'>
        <BsFillBellFill className='icon'/>
        <BsFillEnvelopeFill className='icon'/>
        <Link to="/student/Profile">
          <BsPersonCircle className='icon'/>
        </Link>
        {/* Add logout button */}
        <button className='logout-button' onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;

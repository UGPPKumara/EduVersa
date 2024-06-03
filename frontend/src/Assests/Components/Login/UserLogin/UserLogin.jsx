import React from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../../../Images/Logo1.png';
import './UserLogin.css';

const UserLogin = () => {
  return (
    <div className='login-container'>
      <div className='login-col col-left'>    
        <img src={Logo} alt="Logo" className='logo' />
        <Outlet />
      </div>

      <div className='login-col col-right'>
        <div className='background-opacity'>
          <p className='right-text'>Your Learning Journey Begins Here</p>
        </div>
      </div>    
    </div>
  );
}


export default UserLogin;

import React from 'react'
import LoginHome from '../LoginHome/LoginHome'
import Logo from '../../../Images/Logo1.png'
import './UserLogin.css'
import LoginForm from '../LoginForm/LoginForm'
import LoginRoutes from '../LoginRoutes/LoginRoutes'

const UserLogin = () => {
  return (
    <div className='login-container'>
      <div className='login-col col-left'>    
        <img src={Logo} alt="Logo" className='logo'></img>
       <LoginRoutes/>
        </div>

        <div className='login-col col-right'>
        <div className='background-opacity'>
          <p className='right-text'>Your Learning Journey Begins Here</p>
        </div>
      </div>    
    </div>
  )
}

export default UserLogin
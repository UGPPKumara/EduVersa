import React from 'react'
import { Link, } from 'react-router-dom';
import './LoginForm.css'

function LoginForm() {

  return (
    <div className='login-form-container'>
      <div className="login-form-container-fluid">

      
      <form className='login-form'>
        <h2>Login</h2>
        <div className='login-form-col'>
          <label htmlFor="username" className='login-label'>Username:</label>
          <input className='inbox'
            type="text"
            id="username"
            />
            
        </div>
        <div className='login-form-col '>
          <label htmlFor="password" className='login-label'>Password:</label>
          <input className='inbox'
            type="password"
            id="password"
            
          />
        </div>
        <div>
          <button className="login-btn">
            Log in
          </button>
        </div>
            <Link to="/" >Lost Password?</Link>
         
      </form>
            </div>
    </div>
  )
}

export default LoginForm

import React from 'react'
import './Login.css'
import Logo from '../../Assests/Images/EduVersa.png'



const Login = () => {
  return (
    <div className='login-container'>
      <div className='login-form'>
      <div className="logo">
        <img src= {Logo} alt='EduVersa'/>
      </div>
        <form>
        <h6>Login</h6>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <div className='form-check'>
            <input type='checkbox' id='remember' />
            <label htmlFor='remember'>Remember email</label>
          </div>
          <button type='submit'>Login</button>
          <a href="#">Lost password?</a>
        </form>
      </div>
      <div className='login-right'>
        <div className='login-right-content'>
          <h1>Your Learning Journey Begins Here</h1>
          
        </div>
      </div>


    </div>
  )
}

export default Login
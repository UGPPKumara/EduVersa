import React from 'react'
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
import './Header.css'
import Logo from '../../../Images/logo.png'
import { Link } from 'react-router-dom'

 

const Header = () => {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon'/>
        </div>
        
        <div className='header-left'>
          <img src={Logo} alt='EduVersa' className='logo'/>
            <BsSearch  className='icon'/>
        </div>
        
        <div className='header-right'>
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <Link to="/Profile" ><BsPersonCircle className='icon'/></Link>
        </div>
    </header>
  )
}

export default Header
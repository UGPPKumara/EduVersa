import React from 'react'
import './Footer.css'
// import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>      
        <div className='footer-left'>
          <p>© 2021</p>
        </div>
        <div className='footer-center'>         
          <p>Phone: 123-456-7890</p>
        </div>    
        <div className='footer-right'>
          <p>Terms of Service</p>         
        </div>
    </div>
  )
}

export default Footer
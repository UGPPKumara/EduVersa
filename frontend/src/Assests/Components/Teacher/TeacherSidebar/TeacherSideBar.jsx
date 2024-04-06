import React from 'react'
import '../../Admin/Sidebar/Sidebar.css'
import { Link } from 'react-router-dom'
import {
  BsBookFill,
  BsChatSquareDotsFill,
  BsGearFill,
  BsPeopleFill,
  BsPersonFill
} from 'react-icons/bs'

const Sidebar = () => {
  return (
    <div className='sidebar'>     
      <div className='sidebar-menu'>
        <ul>
          <li>
            <Link to="/teacher">
              <BsBookFill className='icon'/>
             Dashboard
              </Link>
          </li>          
          <li>
            <Link to="/teacher">
              <BsBookFill className='icon'/>
             Assignments
              </Link>
          </li>          
          <li id='sidebar-menu-item'>            
            <Link to="/teacher" >
              <BsPersonFill className='icon'/>
              Ask Question
              </Link>
          </li>
          <li className='sidebar-menu-item'>
            <Link to="/teacher/SelfLearninManagement" >
              <BsPeopleFill className='icon'/>
              Self Learning
              </Link>
          </li>   
          <li className='sidebar-menu-item'>
            <Link to="/teacher" >
              <BsChatSquareDotsFill className='icon'/>
              Chat
              </Link>
          </li>
          <li className='sidebar-menu-item'>
            <Link to="/teacher" >
              <BsGearFill className='icon'/>
             Setting
              </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
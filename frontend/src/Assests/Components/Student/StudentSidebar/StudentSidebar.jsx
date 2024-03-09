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
            <Link to="/StudentCourses ">
              <BsBookFill className='icon'/>
             Courses
              </Link>
          </li>          
          <li id='sidebar-menu-item'>            
            <Link to="/AdminLectures" >
              <BsPersonFill className='icon'/>
              Ask Question
              </Link>
          </li>
          <li className='sidebar-menu-item'>
            <Link to="/StudentSelfLearning" >
              <BsPeopleFill className='icon'/>
              Self Learning
              </Link>
          </li>   
          <li className='sidebar-menu-item'>
            <Link to="/" >
              <BsChatSquareDotsFill className='icon'/>
              Chat
              </Link>
          </li>
          <li className='sidebar-menu-item'>
            <Link to="/" >
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
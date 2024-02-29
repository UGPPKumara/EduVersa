import React from 'react'
import '../../Admin/Sidebar/Sidebar.css'
import { Link } from 'react-router-dom'
import { BsBookFill, BsBookmarksFill, BsFileTextFill, BsGearFill, BsPeopleFill, BsPersonBadge, BsPersonFill } from 'react-icons/bs'

const Sidebar = () => {
 

  return (
    <div className='sidebar'>
      
      <div className='sidebar-menu'>
        <ul>
          <li>
            <Link to="/CourseManagement" >
              <BsBookFill className='icon'/>
             Courses
              </Link>
          </li>
          <li className='sidebar-menu-item'>            
            <Link to="/StudentManagement" >
              <BsPersonBadge className='icon'/>
              Students
              </Link>
          </li>
          <li id='sidebar-menu-item'>            
            <Link to="/AdminLectures" >
              <BsPersonFill className='icon'/>
              Teachers
              </Link>
          </li>
          <li className='sidebar-menu-item'>
            <Link to="/" >
              <BsPeopleFill className='icon'/>
              Alumina
              </Link>
          </li>
          <li className='sidebar-menu-item'>
            {/* Sub-links for Courses */}
            <ul className="sub-links">
              <li className='sub-links-item'>
                <Link to="/FacultyManagement" >
                  <BsBookFill className='icon'/>
                  Faculty Management
                </Link>
              </li>
              <li className='sub-links-item'>
                <Link to="/DegreeManagement" >
                  <BsBookmarksFill className='icon'/>
                  Degree Management
                </Link>
              </li>
              <li className='sub-links-item'>
                <Link to="/CourseManagement" >
                  <BsFileTextFill className='icon'/>
                  Course Management
                </Link>
              </li>
            </ul>
          </li>
          <li className='sidebar-menu-item'>
            <Link to="/" >
              <BsGearFill className='icon'/>
              Settings
              </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
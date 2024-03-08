import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import { BsBookFill, BsBookmarksFill, BsFileTextFill, BsGearFill, BsGrid1X2Fill, BsPeopleFill, BsPersonBadge, BsPersonFill } from 'react-icons/bs'

const Sidebar = () => {
 

  return (
    <div className='sidebar'>
      
      <div className='sidebar-menu'>
        <ul>
          <li className='sidebar-menu-item'>
            <Link exact to="/AdminDashboard" >
              <BsGrid1X2Fill className='icon'/>
              Dashboard
              </Link>
          </li>
          <li className='sidebar-menu-item'>            
            <Link to="/StudentManagement" >
              <BsPersonBadge className='icon'/>
              Students
              </Link>
          </li>
          <li id='sidebar-menu-item'>            
            <Link to="/TeacherManagement" >
              <BsPersonFill className='icon'/>
              Teachers
              </Link>
          </li>
          <li className='sidebar-menu-item'>
            <Link to="/AluminaManagement" >
              <BsPeopleFill className='icon'/>
              Alumina
              </Link>
          </li>
          <li className='sidebar-menu-item'>
            <Link to="/CourseManagement" >
              <BsBookFill className='icon'/>
              Courses
              </Link>
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
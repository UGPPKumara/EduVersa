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
            <Link exact to="/admin" >
              <BsGrid1X2Fill className='icon'/>
              Dashboard
              </Link>
          </li>
          <li className='sidebar-menu-item'>            
            <Link to="/admin/StudentManagement" >
              <BsPersonBadge className='icon'/>
              Students
              </Link>
          </li>
          <li id='sidebar-menu-item'>            
            <Link to="/admin/TeacherManagement" >
              <BsPersonFill className='icon'/>
              Teachers
              </Link>
          </li>
          <li className='sidebar-menu-item'>
            <Link to="/admin/AluminaManagement" >
              <BsPeopleFill className='icon'/>
              Alumina
              </Link>
          </li>
          <li className='sidebar-menu-item'>
            <Link to="/admin/CourseManagement" >
              <BsBookFill className='icon'/>
              Courses
              </Link>
            {/* Sub-links for Courses */}
            <ul className="sub-links">
              <li className='sub-links-item'>
                <Link to="/admin/FacultyManagement" >
                  <BsBookFill className='icon'/>
                  Faculty Management
                </Link>
              </li>
              <li className='sub-links-item'>
                <Link to="/admin/DegreeManagement" >
                  <BsBookmarksFill className='icon'/>
                  Degree Management
                </Link>
              </li>
              <li className='sub-links-item'>
                <Link to="/admin/CourseManagement" >
                  <BsFileTextFill className='icon'/>
                  Course Management
                </Link>
              </li>
            </ul>
          </li>
          <li className='sidebar-menu-item'>
            <Link to="/admin" >
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
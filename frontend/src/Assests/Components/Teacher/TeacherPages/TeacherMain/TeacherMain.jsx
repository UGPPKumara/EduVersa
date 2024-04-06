import React from 'react'
import Header from '../../../Admin/Header/Header'
import TeacherSidebar from '../../TeacherSidebar/TeacherSideBar'

import './TeacherMain.css'
import { Outlet } from 'react-router-dom'

const TeacherMain = () => {
  return (
    <div className='TeacherMain'>
      <Header/>
      <div className="sidebar-home">
        <TeacherSidebar />
        <Outlet />
      </div>
    </div>
  )
}

export default TeacherMain
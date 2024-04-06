import React from 'react'
import Header from '../../../Admin/Header/Header'
import StudentSidebar from '../../StudentSidebar/StudentSidebar'

import './StudentMain.css'
import { Outlet } from 'react-router-dom'

const StudentMain = () => {
  return (
    <div className='StudentMain'>
      <Header/>
      <div className="sidebar-home">
        <StudentSidebar />
        <Outlet />
      </div>
    </div>
  )
}

export default StudentMain
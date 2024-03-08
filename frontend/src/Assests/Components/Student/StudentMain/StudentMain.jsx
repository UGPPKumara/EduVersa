import React from 'react'
import Header from '../../../Admin/Header/Header'
import StudentSidebar from '../../StudentSidebar/StudentSidebar'
import StudentHome from '../../StudentHome/StudentHome'
import './StudentMain.css'

const StudentMain = () => {
  return (
    <div className='StudentMain'>
      <Header/>
      <div className="sidebar-home">
        <StudentSidebar />
        <StudentHome />
      </div>
    </div>

  )
}

export default StudentMain
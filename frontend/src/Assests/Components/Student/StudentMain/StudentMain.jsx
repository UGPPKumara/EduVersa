import React from 'react'
import Header from '../../../Admin/Header/Header'
import StudentSidebar from '../../StudentSidebar/StudentSidebar'
import Home from '../../../Admin/Home/Home'
import './StudentMain.css'

const StudentMain = () => {
  return (
    <div className='StudentMain'>
      <Header/>
      <div className="sidebar-home">
        <StudentSidebar />
        <Home />
      </div>
    </div>

  )
}

export default StudentMain
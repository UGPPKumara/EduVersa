import React from 'react'
import Header from '../../Header/Header'
import Sidebar from '../../Sidebar/Sidebar'

// import Footer from '../../Footer/Footer'
import './AdminMain.css'
import { Outlet } from 'react-router-dom'

const AdminMain = () => {
  return (
    <div className='AdminMain'>
      <Header />
      <space className="sidebar-home">
        <Sidebar />
        <Outlet/>
      </space>
    </div>
  )
}

export default AdminMain
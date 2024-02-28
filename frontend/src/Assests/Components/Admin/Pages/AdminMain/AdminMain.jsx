import React from 'react'
import Header from '../../Header/Header'
import Sidebar from '../../Sidebar/Sidebar'
import Home from '../../Home/Home'
// import Footer from '../../Footer/Footer'
import './AdminMain.css'

const AdminMain = () => {
  return (
    <div className='AdminMain'>
      <Header />
      <space className="sidebar-footer">
        <Sidebar />
        <Home />
      </space>
      {/* <Footer /> */}
    </div>
  )
}

export default AdminMain
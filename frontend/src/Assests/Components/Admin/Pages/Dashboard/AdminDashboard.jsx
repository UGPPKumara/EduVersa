import React from 'react'
import '../Students/StudentManagement.css'
import './AdminDashboard.css'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h2>Admin Dashboard</h2>
      </div>
      <div className="count">
        <div className="count-card-1">
          <div className="count-text">
            <h3>Total Student</h3>
            <h1>1000</h1>
          </div>

          <Link to="/StudentManagement"> View Details</Link>

        </div>
        <div className="count-card-2">
          <div className="count-text">
          <h3>Total Teachers</h3>
          <h1>60</h1>
          </div>
          <Link to="/TeacherManagement"> View Details</Link>

        </div>
        <div className="count-card-3">
          <div className="count-text">

          <h3>Total Alumina</h3>
          <h1>50</h1>

          </div>
          <Link to="/AluminaManagement"> View Details</Link>

        </div>
        <div className="count-card-4">
          <div className="count-text">

          <h3>Total Subjects</h3>
          <h1>50</h1>

          </div>
          <Link to="/CourseManagement"> View Details</Link>

        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
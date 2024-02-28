import React from 'react'
import {Routes, Route } from 'react-router-dom'
import AdminDashboard from '../Pages/Dashboard/AdminDashboard'
import StudentManagement from '../Pages/Students/StudentManagement/StudentManagement'
import AdminLectures from '../Pages/Lectures/AdminLectures'
import Profile from '../Pages/Profile/Profile'
import CourseManagement from '../Pages/Courses/CourseManagement/CourseManagement'
import FacultyManagement from '../Pages/Courses/FacultyManagement/FacultyManagement'
import DegreeManagement from '../Pages/Courses/DegreeManagement/DegreeManagement'

const AdminRoutes = () => {
  return (
    <Routes>
        <Route exact path='/AdminDashboard' element={<AdminDashboard />} />
        <Route path='/StudentManagement' element={<StudentManagement />} />
        <Route path='/AdminLectures' element={<AdminLectures />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/CourseManagement' element={<CourseManagement/>} />
        <Route path='/FacultyManagement' element={<FacultyManagement/>} />
        <Route path='/DegreeManagement' element={<DegreeManagement/>} />     
    </Routes>
  )
}

export default AdminRoutes
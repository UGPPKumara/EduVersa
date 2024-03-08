import React from 'react'
import {Routes, Route } from 'react-router-dom'
import AdminDashboard from '../Pages/Dashboard/AdminDashboard'
import StudentManagement from '../Pages/Students/StudentManagement'
import TeacherManagement from '../Pages/Teachers/TeacherManagement'
import AdminLectures from '../Pages/Lectures/AdminLectures'
import Profile from '../Pages/Profile/Profile'
import CourseManagement from '../Pages/Courses/CourseManagement/CourseManagement'
import FacultyManagement from '../Pages/Courses/FacultyManagement/FacultyManagement'
import DegreeManagement from '../Pages/Courses/DegreeManagement/DegreeManagement'
import AluminaManagement from '../Pages/Alumina/AluminaManagement'

const AdminRoutes = () => {
  return (
    <Routes>
        <Route index path='/AdminDashboard' element={<AdminDashboard />} />
        <Route path='/StudentManagement' element={<StudentManagement />} />
        <Route path='/TeacherManagement' element={<TeacherManagement />} />
        <Route path='/AluminaManagement' element={<AluminaManagement />} />
        <Route path='/AdminLectures' element={<AdminLectures />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/CourseManagement' element={<CourseManagement/>} />
        <Route path='/FacultyManagement' element={<FacultyManagement/>} />
        <Route path='/DegreeManagement' element={<DegreeManagement/>} />     
    </Routes>
  )
}

export default AdminRoutes
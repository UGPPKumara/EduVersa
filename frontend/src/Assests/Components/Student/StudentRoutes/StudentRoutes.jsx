import React from 'react'
import {Routes, Route } from 'react-router-dom'
import StudentCourses from '../StudentPages/StudentCourses/StudentCourses'

const  StudentRoutes = () => {
  return (
    <Routes>
      <Route path='/StudentCourses' element={<StudentCourses/>} />
    </Routes> 
  )
}


export default StudentRoutes
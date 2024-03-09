import React from 'react'
import {Routes, Route } from 'react-router-dom'
import StudentCourses from '../StudentPages/StudentCourses/StudentCourses'
import StudentSelfLearning from '../StudentPages/StudentSelfLearning/StudentSelfLearning'

const  StudentRoutes = () => {
  return (
    <Routes>
      <Route path='/StudentCourses' element={<StudentCourses/>} />
      <Route path='/StudentSelfLearning' element={<StudentSelfLearning/>} />
    </Routes> 
  )
}


export default StudentRoutes
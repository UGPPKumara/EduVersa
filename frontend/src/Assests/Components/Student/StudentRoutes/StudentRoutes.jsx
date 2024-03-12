import React from 'react'
import {Routes, Route } from 'react-router-dom'
import StudentCourses from '../StudentPages/StudentCourses/StudentCourses'
import StudentSelfLearning from '../StudentPages/StudentSelfLearning/StudentSelfLearning'
import CourseView from '../StudentPages/CourseView/CourseView'

const  StudentRoutes = () => {
  return (
    <Routes>
      <Route path='/StudentCourses' element={<StudentCourses/>} />
      <Route path='/StudentSelfLearning' element={<StudentSelfLearning/>} />
      <Route path='/CourseView' element={<CourseView/>} />
    </Routes> 
  )
}


export default StudentRoutes
import React from 'react'
import './CourseView.css'

const CourseView = () => {
  return (
    
    <div className="course-view">
      <div className="course-view-backlink">
        <a href="/StudentCourses">Home</a> &gt; <a href="/CourseView">IS2103 - Agile Software Development</a>
      </div>
      <div className="course-view-content">
        <div className="course-content-header">
          <h2>Topic 1</h2>
        </div>
        <div className="course-content-body">
          <a href="/">presentation 1</a>
        </div>
      </div>
      <div className="course-view-content">
        <div className="course-content-header">
          <h2>Topic 1</h2>
        </div>
        <div className="course-content-body">
          <a href="/">presentation 1</a>
        </div>
      </div>
      <div className="course-view-content">
        <div className="course-content-header">
          <h2>Assignment</h2>
        </div>
        <div className="course-content-body">
          <a href="/">Assignment1</a>
          <a href="/">Marks</a>
        </div>
      </div>
    </div>
  )
}

export default CourseView
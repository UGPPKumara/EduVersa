import React from 'react'
import course from '../../../../Images/course.avif'
import './StudentCourses.css'
import { Link } from 'react-router-dom'

const StudentCourses = () => {
  return (
    <div className="student-courses">
      <div className="features">
        <button className='features-btn-1'>Ask Question</button>
        <Link to="/student/StudentSelfLearning" className=''>
          <button className='features-btn-2'>Self Learning</button>
        </Link>
        
        <button className='features-btn-3 ' >Chat</button>
      </div>
      <h2>Course overview</h2>

      <div className="courses">
        <div className="course">
          <img src={course} alt="course" />
          <h3>IS2103 - Agile Software Development</h3>
          <h4>Year II Semester II</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolorem expedita minima fuga ipsam aspernatur adipisci possimus id suscipit tempore.</p>
          <Link to="/student/CourseView">
          <button className='view-btn'>View</button>
          </Link>
        </div>
        <div className="course">
          <img src={course} alt="course" />
          <h3>IS2103 - Agile Software Development</h3>
          <h4>Year II Semester II</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolorem expedita minima fuga ipsam aspernatur adipisci possimus id suscipit tempore.</p>
          <Link to="/CourseView">
          <button className='view-btn'>View</button>
          </Link>
        </div>
        <div className="course">
          <img src={course} alt="course" />
          <h3>IS2103 - Agile Software Development</h3>
          <h4>Year II Semester II</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolorem expedita minima fuga ipsam aspernatur adipisci possimus id suscipit tempore.</p>
          <Link to="/CourseView">
          <button className='view-btn'>View</button>
          </Link>
        </div>
        <div className="course">
          <img src={course} alt="course" />
          <h3>IS2103 - Agile Software Development</h3>
          <h4>Year II Semester II</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolorem expedita minima fuga ipsam aspernatur adipisci possimus id suscipit tempore.</p>
          <Link to="/CourseView">
          <button className='view-btn'>View</button>
          </Link>
        </div>
        <div className="course">
          <img src={course} alt="course" />
          <h3>IS2103 - Agile Software Development</h3>
          <h4>Year II Semester II</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolorem expedita minima fuga ipsam aspernatur adipisci possimus id suscipit tempore.</p>
          <Link to="/CourseView">
          <button className='view-btn'>View</button>
          </Link>
        </div>
        <div className="course">
          <img src={course} alt="course" />
          <h3>IS2103 - Agile Software Development</h3>
          <h4>Year II Semester II</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolorem expedita minima fuga ipsam aspernatur adipisci possimus id suscipit tempore.</p>
          <Link to="/CourseView">
          <button className='view-btn'>View</button>
          </Link>
        </div>
      </div>
     
     
    </div>
  )
}

export default StudentCourses
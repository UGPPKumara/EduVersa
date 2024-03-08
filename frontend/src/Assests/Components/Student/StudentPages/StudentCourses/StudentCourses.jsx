import React from 'react'
import course from '../../../../Images/course.avif'
import './StudentCourses.css'

const StudentCourses = () => {
  return (
    <div className="student-courses">
      <div className="features">
        <button>Ask Question</button>
        <button>Self Learning</button>
        <button>Chat</button>
      </div>
      <h2>Course overview</h2>

      <div className="courses">
        <div className="course">
          <img src={course} alt="course" />
          <h3>IS2103 - Agile Software Development</h3>
          <h4>Year II Semester II</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolorem expedita minima fuga ipsam aspernatur adipisci possimus id suscipit tempore.</p>
          <button>View</button>
        </div>
        <div className="course">
          <img src={course} alt="course" />
          <h3>IS2103 - Agile Software Development</h3>
          <h4>Year II Semester II</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolorem expedita minima fuga ipsam aspernatur adipisci possimus id suscipit tempore.</p>
          <button>View</button>
        </div>
        <div className="course">
          <img src={course} alt="course" />
          <h3>IS2103 - Agile Software Development</h3>
          <h4>Year II Semester II</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolorem expedita minima fuga ipsam aspernatur adipisci possimus id suscipit tempore.</p>
          <button>View</button>
        </div>
        <div className="course">
          <img src={course} alt="course" />
          <h3>IS2103 - Agile Software Development</h3>
          <h4>Year II Semester II</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolorem expedita minima fuga ipsam aspernatur adipisci possimus id suscipit tempore.</p>
          <button>View</button>
        </div>
        <div className="course">
          <img src={course} alt="course" />
          <h3>IS2103 - Agile Software Development</h3>
          <h4>Year II Semester II</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolorem expedita minima fuga ipsam aspernatur adipisci possimus id suscipit tempore.</p>
          <button>View</button>
        </div>
        <div className="course">
          <img src={course} alt="course" />
          <h3>IS2103 - Agile Software Development</h3>
          <h4>Year II Semester II</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolorem expedita minima fuga ipsam aspernatur adipisci possimus id suscipit tempore.</p>
          <button>View</button>
        </div>
      </div>
     
     
    </div>
  )
}

export default StudentCourses
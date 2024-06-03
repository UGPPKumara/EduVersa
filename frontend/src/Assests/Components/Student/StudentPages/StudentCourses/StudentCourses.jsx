import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../../../../firebase/config';
import './StudentCourses.css';
import Photo from '../../../../Images/course.avif';

const StudentCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'courses'));
        const coursesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCourses(coursesData);
      } catch (error) {
        console.error('Error fetching courses: ', error);
      }
    };

    fetchCourses();
  }, []);
  return (
    <div className="student-courses">
      <div className="features">
        <Link to="/student/AskQuestion" className=''>
        <button className='features-btn-1'>Ask Question</button>
        </Link>
          
        <Link to="/student/StudentSelfLearning" className=''>
          <button className='features-btn-2'>Self Learning</button>
        </Link>
        
        <button className='features-btn-3 ' >Chat</button>
      </div>
      <h2>Course overview</h2>

      <div className="courses">
        {courses.map(course => (
          <div className="course" key={course.id}>
            <img src={Photo} alt="course" />
            <h3>{course.courseName}</h3>
            <h4>{course.semester}</h4>
            <p>{course.description}</p>
            <Link to={`/student/CourseView`}>
              <button className="view-btn">View</button>
            </Link>
          </div>
        ))}
      </div>
        
      </div>
    
  )
}

export default StudentCourses
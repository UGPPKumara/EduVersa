import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../../../../firebase/config';
import courseImage from '../../../../Images/course.avif';
import '../../../Student/StudentPages/StudentCourses/StudentCourses.css';
import './TeacherDashboard.css';
import { Link } from 'react-router-dom';

const TeacherDashboard = () => {
  const [teacherName, setTeacherName] = useState('');
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchTeacherName = async () => {
      try {
        const usersRef = collection(db, 'users');
        const querySnapshot = await getDocs(query(usersRef, where('userRole', '==', 'teacher')));
        if (!querySnapshot.empty) {
          const teacherData = querySnapshot.docs[0].data();
          setTeacherName(teacherData.name);
        }
      } catch (error) {
        console.error('Error fetching teacher name:', error);
      }
    };

    const fetchCourses = async () => {
      try {
        const coursesRef = collection(db, 'courses');
        const coursesSnapshot = await getDocs(coursesRef);
        const coursesData = coursesSnapshot.docs.map(doc => doc.data());
        setCourses(coursesData);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchTeacherName();
    fetchCourses();
  }, []);

  return (
    <div className="teacher-dashboard">

<div className="teacher-header">
<h2>Welcome, {teacherName}</h2>
        
      </div>
      
      <div className="courses">
        {courses.map(course => (
          <div className="course" key={course.courseCode}>
            <img src={courseImage} alt="course" />
            <h3>{course.courseName}</h3>
            <h4>{course.year} - {course.semester}</h4>
            <Link to="/teacher/TeacherCourseView">
          <button className='view-btn'>View</button>
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherDashboard;

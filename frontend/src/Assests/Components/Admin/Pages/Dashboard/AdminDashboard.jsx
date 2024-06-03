import React, { useState, useEffect } from 'react';
import '../Students/StudentManagement.css';
import './AdminDashboard.css';
import { Link } from 'react-router-dom';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../../../../../firebase/config'

const AdminDashboard = () => {
  const [teacherCount, setTeacherCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);
  const [aluminaCount, setAluminaCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);

  useEffect(() => {
    // Get teacher count
    const teacherCollectionRef = collection(db, 'users');
    const teacherQuery = query(teacherCollectionRef, where('userRole', '==', 'teacher'));
    const teacherUnsubscribe = onSnapshot(teacherQuery, (querySnapshot) => {
      setTeacherCount(querySnapshot.size);
    });

    // Get student count
    const studentCollectionRef = collection(db, 'users');
    const studentQuery = query(studentCollectionRef, where('userRole', '==', 'student'));
    const studentUnsubscribe = onSnapshot(studentQuery, (querySnapshot) => {
      setStudentCount(querySnapshot.size);
    });

    // Get alumina count
    const aluminaCollectionRef = collection(db, 'users');
    const aluminaQuery = query(aluminaCollectionRef, where('userRole', '==', 'alumina'));
    const aluminaUnsubscribe = onSnapshot(aluminaQuery, (querySnapshot) => {
      setAluminaCount(querySnapshot.size);
    });

    // Get course count
    const courseCollectionRef = collection(db, 'courses');
    const courseQuery = query(courseCollectionRef);
    const courseUnsubscribe = onSnapshot(courseQuery, (querySnapshot) => {
      setCourseCount(querySnapshot.size);
    });

    return () => {
      teacherUnsubscribe();
      studentUnsubscribe();
      aluminaUnsubscribe();
      courseUnsubscribe();
    };
  }, []);

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h2>Admin Dashboard</h2>
      </div>
      <div className="count">
        <div className="count-card-1">
          <div className="count-text">
            <h3>Total Student</h3>
            <h1>{studentCount}</h1>
          </div>
          <Link to="/admin/StudentManagement"> View Details</Link>
        </div>
        <div className="count-card-2">
          <div className="count-text">
            <h3>Total Teachers</h3>
            <h1>{teacherCount}</h1>
          </div>
          <Link to="/admin/TeacherManagement"> View Details</Link>
        </div>
        <div className="count-card-3">
          <div className="count-text">
            <h3>Total Alumina</h3>
            <h1>{aluminaCount}</h1>
          </div>
          <Link to="/admin/AluminaManagement"> View Details</Link>
        </div>
        <div className="count-card-4">
          <div className="count-text">
            <h3>Total Subjects</h3>
            <h1>{courseCount}</h1>
          </div>
          <Link to="/admin/CourseManagement"> View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

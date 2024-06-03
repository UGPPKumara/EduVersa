import React, { useState, useEffect } from 'react';
import './CourseManagement.css';
import AddNewCourse from './AddNewCourse/AddNewCourse';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import db from '../../../../../../firebase/config'; // Import your Firestore configuration

const CourseManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const [courseToDelete, setCourseToDelete] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'courses'));
        const coursesData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setCourses(coursesData);
      } catch (error) {
        console.error('Error fetching courses: ', error);
      }
    };

    fetchCourses();
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  const addCourse = async (newCourse) => {
    try {
      const docRef = await addDoc(collection(db, 'courses'), newCourse);
      console.log('Document written with ID: ', docRef.id);
      setCourses([...courses, { id: docRef.id, ...newCourse }]);
      closeModal();
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const confirmDeleteCourse = (courseId) => {
    setCourseToDelete(courseId);
    // Show confirmation dialog
    if (window.confirm('Are you sure you want to delete this course?')) {
      deleteCourse(courseId);
    } else {
      setCourseToDelete(null);
    }
  };

  const deleteCourse = async (courseId) => {
    try {
      await deleteDoc(doc(db, 'courses', courseId));
      setCourses(courses.filter((course) => course.id !== courseId));
      setCourseToDelete(null);
    } catch (error) {
      console.error('Error deleting course: ', error);
    }
  };

  return (
    <div className="course-management">
      <div className="course-header">
        <h2>Course Management</h2>
        <button onClick={openModal} className="add-course-button btn">
          Add New Course
        </button>
      </div>
      <table className="course-table">
        <thead>
          <tr>
            <th>Faculty</th>
            <th>Degree</th>
            <th>Year</th>
            <th>Semester</th>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Teacher</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.faculty}</td>
              <td>{course.degree}</td>
              <td>{course.year}</td>
              <td>{course.semester}</td>
              <td>{course.courseCode}</td>
              <td>{course.courseName}</td>
              <td>{course.teacher}</td>
              <td className="action">
                <button className="update btn">Update</button>
                <button className="delete btn" onClick={() => confirmDeleteCourse(course.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <AddNewCourse isOpen={isModalOpen} onRequestClose={closeModal} onSave={addCourse} />
    </div>
  );
};

export default CourseManagement;

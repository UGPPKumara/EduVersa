/* eslint-disable react/jsx-no-undef */
import React from 'react'
import './CourseManagement.css'
import AddNewCourse from '../../Courses/CourseManagement/AddNewCourse/AddNewCourse';
import { useState, useEffect } from 'react';



const CourseManagement = () => {
  // Use state to manage student data
  const [course, setCourse] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleEdit = (editedCourse) => {
    // Implement the logic to handle the editing of the course
    console.log('Edit button clicked for course:', editedCourse);
  };
  const handleDelete = (courseId) => {
    // Show a confirmation dialog
    const isConfirmed = window.confirm("Are you sure to delete this course?");
  
    if (isConfirmed) {
      // Implement the logic to handle the deletion of the course
      // Example: deleteCourse(courseId).then(() => console.log('Course deleted'));
      setCourse((prevCourses) => prevCourses.filter((course) => course.id !== courseId));
    }
  }; 

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    // Fetch student data from your API or any data source
    // Update the state with the fetched data
    // Example: fetchStudents().then(data => setStudents(data));
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSave = (formData) => {
    // Implement API call to save data to MongoDB
    // Example: saveStudentData(formData).then(() => console.log('Student data saved'));
    // Update students state with the new data
    setCourse((prevCourses) => [...prevCourses, formData]);
  };
  return (    
    <div className='course-management'>
      <div className="course-header">
        <h2>Course Management</h2>            
        <button onClick={openModal} className="add-course-btn">
          Add New Course
        </button>    
      </div>
     

      {/* Course List Table */}
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

          {course.map((course) => (
            <tr key={course.id}>
              <td>{course.faculty}</td>
              <td>{course.degree}</td>
              <td>{course.year}</td>
              <td>{course.semester}</td>
              <td>{course.courseCode}</td>
              <td>{course.courseName}</td>
              <td>{course.teacher}</td>
              
              <td className='action-btn'>
      <button className="edit-button"  onClick={() => handleEdit(course)}>Edit</button>
      <button className="delete-button" id='delete' onClick={() => handleDelete(course.id)}>Delete</button>
    </td>
            </tr>
          ))}
        </tbody>
      </table>


        <AddNewCourse
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          onSave={handleSave}
      />


    </div>
  )
}

export default CourseManagement
import React from 'react'
import './CourseManagement.css'
import AddNewCourse from '../../Courses/CourseManagement/AddNewCourse/AddNewCourse';
import { useState} from 'react';
import '../../Students/StudentManagement.css'

const CourseManagement = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (    
    <div className='course-management'>
      <div className="course-header">
        <h2>Course Management</h2>            
        <button onClick={openModal} className="add-course-button">
          Add New Course
        </button>    
      </div>
     
      <table className="course-table">
        <thead>
          <tr>
            <th>Faculty</th>
            <th>Degree</th>
            <th>Semester</th>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Teacher</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>Faculty of Computing</td>
              <td>CIS</td>
              <td>4</td>
              <td>IS4012</td>
              <td>FIS</td>
              <td>Teacher 01</td>
              
              <td className='action'>
                <button className='update'>Update</button>
                <button className='delete'>Delete</button>
              </td>
            </tr>
            <tr>
              <td>Faculty of Computing</td>
              <td>CIS</td>
              <td>4</td>
              <td>IS4012</td>
              <td>FIS</td>
              <td>Teacher 01</td>
              
              <td className='action'>
                <button className='update'>Update</button>
                <button className='delete'>Delete</button>
              </td>
            </tr>
            <tr>
              <td>Faculty of Computing</td>
              <td>CIS</td>
              <td>4</td>
              <td>IS4012</td>
              <td>FIS</td>
              <td>Teacher 01</td>
              
              <td className='action'>
                <button className='update'>Update</button>
                <button className='delete'>Delete</button>
              </td>
            </tr>
            <tr>
              <td>Faculty of Computing</td>
              <td>CIS</td>
              <td>4</td>
              <td>IS4012</td>
              <td>FIS</td>
              <td>Teacher 01</td>
              
              <td className='action'>
                <button className='update'>Update</button>
                <button className='delete'>Delete</button>
              </td>
            </tr>
        </tbody>
      </table>


        <AddNewCourse
          isOpen={isModalOpen}
          onRequestClose={closeModal}
      />


    </div>
  )
}

export default CourseManagement
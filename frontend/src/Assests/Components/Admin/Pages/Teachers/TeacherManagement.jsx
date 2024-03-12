import React from 'react'
import AddNewTeacher from './AddNewTeacher/AddNewTeacher';
import { useState} from 'react';
import '../Students/StudentManagement.css'
import './TeacherManagement.css'
import ProfilePicture from '../../../../Images/Frame 7.png'


const TeacherManagement = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
 
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  
  

  return (
    <>
    <div className="teacher-management">
      <div className="teacher-header">
        <h2>Teacher Management</h2>
        <button onClick={openModal} className="add-teacher-button btn">
          Add New Teacher
        </button>
      </div>

      {/* teacher List Table */}
      <table className="teacher-table">
        <thead>
          <tr>
            <th>Profile Picture</th>
            <th>Index Number</th>
            <th>Name</th>
            <th>Email</th>
            <th>Faculty</th>
            <th>Department</th>
            <th>Degree</th>
            <th>Admission Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        
            <tr >
              <td className='profile-pic'>
                <img src={ProfilePicture} alt= "teacher" />
              </td>
              <td>119</td>
              <td>Teacher 01</td>
              <td>teacher@gmail.com</td>
              <td>Faculty of Computing</td>
              <td>CIS</td>
              <td>CS</td>
              <td>01/10/2022</td>
              <td className='action'>
                <button className='update btn'>Update</button>
                <button className='delete btn'>Delete</button>
              </td>
            </tr>
            <tr >
              <td className='profile-pic'>
                <img src={ProfilePicture} alt= "teacher" />
              </td>
              <td>119</td>
              <td>Teacher 01</td>
              <td>teacher@gmail.com</td>
              <td>Faculty of Computing</td>
              <td>CIS</td>
              <td>CS</td>
              <td>01/10/2022</td>
              <td className='action'>
              <button className='update btn'>Update</button>
                <button className='delete btn'>Delete</button>
              </td>
            </tr>
            <tr >
              <td className='profile-pic'>
                <img src={ProfilePicture} alt= "teacher" />
              </td>
              <td>119</td>
              <td>Teacher 01</td>
              <td>teacher@gmail.com</td>
              <td>Faculty of Computing</td>
              <td>CIS</td>
              <td>CS</td>
              <td>01/10/2022</td>
              <td className='action'>
              <button className='update btn'>Update</button>
                <button className='delete btn'>Delete</button>
              </td>
            </tr>
        </tbody>
      </table>
      <AddNewTeacher
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      />
    </div>
    </>
  )
}

export default TeacherManagement
import React from 'react'

import { useState} from 'react';
import './StudentManagement.css'
import '../Teachers/TeacherManagement.css'
import ProfilePicture from '../../../../Images/Frame 7.png'
import AddNewStudent from './AddNewStudent/AddNewStudent';


const StudentManagement = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
 
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  
  

  return (
    <>
    <div className="student-management">
      <div className="student-header">
        <h2>Student Management</h2>
        <button onClick={openModal} className="add-student-button">
          Add New Student
        </button>
      </div>

      {/* teacher List Table */}
      <table className="student-table">
        <thead>
          <tr>
            <th>Profile Picture</th>
            <th>Index Number</th>
            <th>Name</th>
            <th>Email</th>
            <th>Faculty</th>
            <th>Department</th>
            <th>Degree</th>
            <th>Semester</th>
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
              <td>04</td>
              <td>01/10/2022</td>
              <td className='action'>
                <button className='update'>Update</button>
                <button className='delete'>Delete</button>
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
              <td>04</td>
              <td>01/10/2022</td>
              <td className='action'>
                <button className='update'>Update</button>
                <button className='delete'>Delete</button>
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
              <td>04</td>
              <td>01/10/2022</td>
              <td className='action'>
                <button className='update'>Update</button>
                <button className='delete'>Delete</button>
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
              <td>04</td>
              <td>01/10/2022</td>
              <td className='action'>
                <button className='update'>Update</button>
                <button className='delete'>Delete</button>
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
              <td>04</td>
              <td>01/10/2022</td>
              <td className='action'>
                <button className='update'>Update</button>
                <button className='delete'>Delete</button>
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
              <td>04</td>
              <td>01/10/2022</td>
              <td className='action'>
                <button className='update'>Update</button>
                <button className='delete'>Delete</button>
              </td>
            </tr>
        </tbody>
      </table>
      <AddNewStudent
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      />
    </div>
    </>
  )
}

export default StudentManagement
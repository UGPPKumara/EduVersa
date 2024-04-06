import React, { useState} from 'react';
import './FacultyManagement.css'; // Make sure to create the CSS file
import AddNewFaculty from './AddNewFaculty/AddNewFaculty';
import '../../Students/StudentManagement.css'

const FacultyManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='faculty-management'>
      <div className="faculty-header">
        <h2>Faculty Management</h2>
        <button onClick={openModal} className="add-faculty-button btn">
          Add New Faculty
        </button>
      </div>
      <table className="faculty-table">
        <thead>
          <tr>
            <th>Faculty ID</th>
            <th>Faculty Name</th>
            <th>Department ID</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>F01</td>
              <td>Faculty of Computing</td>
              <td>D01</td>
              <td>CIS</td>
              <td className='action'>
                <button className='update btn'>Update</button>
                <button className='delete btn'>Delete</button>
              </td>
            </tr>
            <tr>
              <td>F01</td>
              <td>Faculty of Computing</td>
              <td>D01</td>
              <td>CIS</td>
              <td className='action'>
                <button className='update btn'>Update</button>
                <button className='delete btn'>Delete</button>
              </td>
            </tr>
            <tr>
              <td>F01</td>
              <td>Faculty of Computing</td>
              <td>D01</td>
              <td>CIS</td>
              <td className='action'>
                <button className='update btn'>Update</button>
                <button className='delete btn'>Delete</button>
               </td>
            </tr>
        </tbody>
      </table>

      <AddNewFaculty
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      />
    </div>
  );
}

export default FacultyManagement;

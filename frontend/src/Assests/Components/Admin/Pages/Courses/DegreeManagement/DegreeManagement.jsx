/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import './DegreeManagement.css'; // Make sure to create the CSS file
import AddNewDegree from './AddNewDegree/AddNewDegree';
import '../../Students/StudentManagement.css'

const DegreeManagement = () => {
 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='degree-management'>
      <div className="degree-header">
        <h2>Degree Management</h2>
        <button onClick={openModal} className="add-degree-button">
          Add New Degree
        </button>
      </div>

      <table className="degree-table">
        <thead>
          <tr>
            <th>Degree Name</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>SE</td>
              <td>CIS</td>
              <td className='action'>
                <button className='update'>Update</button>
                <button className='delete'>Delete</button>
              </td>
            </tr>
            <tr>
              <td>SE</td>
              <td>CIS</td>
              <td className='action'>
                <button className='update'>Update</button>
                <button className='delete'>Delete</button>
              </td>
            </tr>
            <tr>
              <td>SE</td>
              <td>CIS</td>
              <td className='action'>
                <button className='update'>Update</button>
                <button className='delete'>Delete</button>
              </td>
            </tr>
        </tbody>
      </table>

      <AddNewDegree
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      />
    </div>
  );
}

export default DegreeManagement;

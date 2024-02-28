/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from 'react';
import './DegreeManagement.css'; // Make sure to create the CSS file
import AddNewDegree from './AddNewDegree/AddNewDegree';

const DegreeManagement = () => {
  // Use state to manage degree data
  const [degrees, setDegrees] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    // Fetch degree data from your API or any data source
    // Example: fetchDegrees().then(data => setDegrees(data));
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleEdit = (editedDegree) => {
    // Implement the logic to handle the editing of the degree
    console.log('Edit button clicked for degree:', editedDegree);
  };

  const handleDelete = (degreeId) => {
    // Show a confirmation dialog
    const isConfirmed = window.confirm("Are you sure to delete this degree?");

    if (isConfirmed) {
      // Implement the logic to handle the deletion of the degree
      // Example: deleteDegree(degreeId).then(() => console.log('Degree deleted'));
      setDegrees((prevDegrees) => prevDegrees.filter((degree) => degree.id !== degreeId));
    }
  };

  const handleSave = (formData) => {
    // Implement API call to save data to your data source
    // Example: saveDegreeData(formData).then(() => console.log('Degree data saved'));
    // Update degrees state with the new data
    setDegrees((prevDegrees) => [...prevDegrees, formData]);
  };

  return (
    <div className='degree-management'>
      <div className="degree-header">
        <h2>Degree Management</h2>
        <button onClick={openModal} className="add-degree-btn">
          Add New Degree
        </button>
      </div>

      {/* Degree List Table */}
      <table className="degree-table">
        <thead>
          <tr>
            <th>Degree Name</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {degrees.map((degree) => (
            <tr key={degree.id}>
              <td>{degree.degreeName}</td>
              <td>{degree.department}</td>
              <td className='action-btn'>
                <button className="edit-button" onClick={() => handleEdit(degree)}>Edit</button>
                <button className="delete-button" id="delete" onClick={() => handleDelete(degree.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <AddNewDegree
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onSave={handleSave}
      />
    </div>
  );
}

export default DegreeManagement;

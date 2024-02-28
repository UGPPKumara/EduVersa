import React, { useState, useEffect } from 'react';
import './FacultyManagement.css'; // Make sure to create the CSS file
import AddNewFaculty from './AddNewFaculty/AddNewFaculty';

const FacultyManagement = () => {
  // Use state to manage faculty data
  const [faculties, setFaculties] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    // Fetch faculty data from your API or any data source
    // Example: fetchFaculties().then(data => setFaculties(data));
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleEdit = (editedFaculty) => {
    // Implement the logic to handle the editing of the faculty
    console.log('Edit button clicked for faculty:', editedFaculty);
  };

  const handleDelete = (facultyId) => {
    // Show a confirmation dialog
    const isConfirmed = window.confirm("Are you sure to delete this faculty?");

    if (isConfirmed) {
      // Implement the logic to handle the deletion of the faculty
      // Example: deleteFaculty(facultyId).then(() => console.log('Faculty deleted'));
      setFaculties((prevFaculties) => prevFaculties.filter((faculty) => faculty.id !== facultyId));
    }
  };

  const handleSave = (formData) => {
    // Implement API call to save data to your data source
    // Example: saveFacultyData(formData).then(() => console.log('Faculty data saved'));
    // Update faculties state with the new data
    setFaculties((prevFaculties) => [...prevFaculties, formData]);
  };

  return (
    <div className='faculty-management'>
      <div className="faculty-header">
        <h2>Faculty Management</h2>
        <button onClick={openModal} className="add-faculty-btn">
          Add New Faculty
        </button>
      </div>

      {/* Faculty List Table */}
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
          {faculties.map((faculty) => (
            <tr key={faculty.id}>
              <td>{faculty.facultyId}</td>
              <td>{faculty.facultyName}</td>
              <td>{faculty.departmentId}</td>
              <td>{faculty.department}</td>
              <td className='action-btn'>
                <button className="edit-button" onClick={() => handleEdit(faculty)}>Edit</button>
                <button className="delete-button" id="delete" onClick={() => handleDelete(faculty.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <AddNewFaculty
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onSave={handleSave}
      />
    </div>
  );
}

export default FacultyManagement;

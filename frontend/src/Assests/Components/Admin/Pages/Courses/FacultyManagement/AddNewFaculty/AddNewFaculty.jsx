import React, { useState } from 'react';
import Modal from 'react-modal';

const AddNewFaculty = ({ isOpen, onRequestClose, addFaculty }) => {
  const [formData, setFormData] = useState({
    facultyName: '',
    department: ''
  });

  // Counters for faculty and department IDs
  const [facultyCounter, setFacultyCounter] = useState(0);
  const [departmentCounter, setDepartmentCounter] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate faculty and department IDs
    const facultyId = `F${facultyCounter + 1}`;
    const departmentId = `D${departmentCounter + 1}`;

    // Update counters
    setFacultyCounter(facultyCounter + 1);
    setDepartmentCounter(departmentCounter + 1);

    // Add faculty with IDs to the database
    addFaculty({ ...formData, facultyId, departmentId });

    // Clear form data and close modal
    setFormData({ facultyName: '', department: '' });
    onRequestClose();
  };

  return (
    <Modal
      className="modal"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add New Faculty"
    >
      <div className="modal-header">
        <h2>Add New Faculty</h2>
        <button onClick={onRequestClose} className="close-button">
          &times;
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Faculty Name:
          <input
            type="text"
            name="facultyName"
            value={formData.facultyName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Department:
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className='btn'>Save Faculty</button>
      </form>
    </Modal>
  );
};

export default AddNewFaculty;

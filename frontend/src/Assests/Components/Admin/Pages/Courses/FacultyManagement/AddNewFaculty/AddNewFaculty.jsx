import React, { useState } from 'react';
import Modal from 'react-modal';

const AddNewFaculty = ({ isOpen, onRequestClose, onSave }) => {
  const [formData, setFormData] = useState({
    facultyName: '',
    department: '',
  });

  // Counter for generating unique IDs
  const [facultyIdCounter, setFacultyIdCounter] = useState(1);
  const [departmentIdCounter, setDepartmentIdCounter] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate unique IDs
    const facultyId = `F${facultyIdCounter.toString().padStart(2, '0')}`;
    const departmentId = `D${departmentIdCounter.toString().padStart(2, '0')}`;

    // Increment counters
    setFacultyIdCounter((prevCounter) => prevCounter + 1);
    setDepartmentIdCounter((prevCounter) => prevCounter + 1);

    // Save data and close modal
    onSave({ ...formData, facultyId, departmentId });
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
        {/* Add form fields for faculty details */}
        <label>
          Faculty Name:
          <input
            type="text"
            name="facultyName"
            value={formData.facultyName}
            onChange={handleChange}
          />
        </label>
        <label>
          Department:
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Save Faculty</button>
      </form>
    </Modal>
  );
};

export default AddNewFaculty;

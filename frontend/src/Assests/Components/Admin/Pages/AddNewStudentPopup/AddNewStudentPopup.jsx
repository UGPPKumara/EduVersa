import React, { useState } from 'react';
import Modal from 'react-modal';
import './AddNewStudentPopup.css';


const AddNewStudentPopup = ({ isOpen, onRequestClose, onSave }) => {
  const [formData, setFormData] = useState({
    profilePicture: null,
    indexNumber: '',
    name: '',
    email: '',
    faculty: '',
    degree: '',
    semester: '',
    admissionDate: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    // If the input is a file input, use files[0] as the value
    const newValue = type === 'file' ? files[0] : value;

    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onRequestClose();
  };

  return (
    <Modal
      className="modal"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add New Student"
    >
      <div className="modal-header">
        <h2>Add New Student</h2>
        <button onClick={onRequestClose} className="close-button">
          &times;
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        {/* Add form fields for student details */}
        <label >
          Profile Picture:
          <input
            type="file"
            accept="image/*"
            name="profilePicture"
            onChange={handleChange}
          />
        </label>
        <label>
          Index Number:
          <input
            type="text"
            name="indexNumber"
            value={formData.indexNumber}
            onChange={handleChange}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Faculty:
          <input
            type="text"
            name="faculty"
            value={formData.faculty}
            onChange={handleChange}
          />
        </label>
        <label>
          Degree:
          <input
            type="text"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
          />
        </label>
        <label>
          Semester:
          <input
            type="text"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
          />
        </label>
        <label>
          Admission Date:
          <input
            type="date"
            name="admissionDate"
            value={formData.admissionDate}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Save Student</button>
      </form>
    </Modal>
  );
};

export default AddNewStudentPopup;

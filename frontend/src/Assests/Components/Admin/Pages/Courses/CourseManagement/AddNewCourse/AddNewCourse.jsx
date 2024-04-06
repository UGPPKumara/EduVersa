import React, { useState } from 'react';
import Modal from 'react-modal';



const AddNewCourse = ({ isOpen, onRequestClose, onSave }) => {
  const [formData, setFormData] = useState({
    faculty: '',
    degree: '',
    year: '',
    semester: '',
    courseCode: '',
    courseName: '',
    teacher: '',
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
      contentLabel="Add New Course"
    >
      <div className="modal-header">
        <h2>Add New Course</h2>
        <button onClick={onRequestClose} className="close-button">
          &times;
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        {/* Add form fields for course details */}
        
        
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
          Year of Study:
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
          Course Code:
          <input
            type="text"
            name="courseCode"
            value={formData.courseCode}
            onChange={handleChange}
          />
        </label>
        <label>
          Course Name:
          <input
            type="text"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
          />
        </label>
        <label>
          Teacher:
          <input
            type="text"
            name="teacher"
            value={formData.teacher}
            onChange={handleChange}
          />
        </label>
        
        <button type="submit" className='btn'>Save Student</button>
      </form>
    </Modal>
  );
};

export default AddNewCourse;

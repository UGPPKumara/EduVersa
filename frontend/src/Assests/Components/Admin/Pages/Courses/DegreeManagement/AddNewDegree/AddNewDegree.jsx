import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../../../../../../firebase/config';

const AddNewDegree = ({ isOpen, onRequestClose, addDegree }) => {
  const [formData, setFormData] = useState({
    degreeName: '',
    department: 'Department', // Default value for department
  });
  const [departments, setDepartments] = useState([]); // Departments fetched from faculties collection

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'faculties'));
        const departmentsData = querySnapshot.docs.map((doc) => doc.data().department);
        // Get unique department names
        const uniqueDepartments = Array.from(new Set(departmentsData));
        setDepartments(uniqueDepartments);
      } catch (error) {
        console.error('Error fetching departments: ', error);
      }
    };

    fetchDepartments();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass formData back to DegreeManagement component to add the new degree
    addDegree(formData);
  };

  return (
    <Modal
      className="modal"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add New Degree"
    >
      <div className="modal-header">
        <h2>Add New Degree</h2>
        <button onClick={onRequestClose} className="close-button">
          &times;
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Degree Name:
          <input
            type="text"
            name="degreeName"
            value={formData.degreeName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Department:
          <select name="department" 
          value={formData.department}
          onChange={handleChange}
           required>
            {departments.map((department, index) => (
              <option key={index} value={department}>{department}</option>
            ))}
          </select>
        </label>
        <button type="submit" className='btn'>Save Degree</button>
      </form>
    </Modal>
  );
};

export default AddNewDegree;

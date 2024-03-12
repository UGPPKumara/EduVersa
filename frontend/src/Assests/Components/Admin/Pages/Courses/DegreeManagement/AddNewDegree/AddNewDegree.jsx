import React, { useState } from 'react';
import Modal from 'react-modal';

const AddNewDegree = ({ isOpen, onRequestClose, onSave }) => {
  const [formData, setFormData] = useState({
    degreeName: '',
    department: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
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
      contentLabel="Add New Degree"
    >
      <div className="modal-header">
        <h2>Add New Degree</h2>
        <button onClick={onRequestClose} className="close-button">
          &times;
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        {/* Add form fields for degree details */}
        <label>
        <label>
          Department:
          <select>
          <option value="someOption">CIS</option>
            <option value="otherOption">SE</option>
          </select>
        </label>
          Degree Name:
          <input
            type="text"
            name="degreeName"
            value={formData.degreeName}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className='btn'>Save Degree</button>
      </form>
    </Modal>
  );
};

export default AddNewDegree;

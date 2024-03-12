import React from 'react';
import Modal from 'react-modal';

const AddNewFaculty = ({ isOpen, onRequestClose }) => {
 
       

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
      <form >
        <label>
          Faculty Name:
          <input
            type="text"
            name="facultyName"
          />
        </label>
        <label>
          Department:
          <input
            type="text"
            name="department"
          />
        </label>
        <button type="submit" className='btn'>Save Faculty</button>
      </form>
    </Modal>
  );
};

export default AddNewFaculty;

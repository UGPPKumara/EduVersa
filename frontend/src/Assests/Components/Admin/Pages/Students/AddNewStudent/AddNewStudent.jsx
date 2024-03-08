import React from 'react';
import Modal from 'react-modal';
import './AddNewStudent.css';


const AddNewStudent = ({ isOpen, onRequestClose}) => {

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
      <form >
        <label >
          Profile Picture:
          <input
            type="file"
            accept="image/*"
            name="profilePicture"
          />
        </label>
        <label>
          Index Number:
          <input
            type="text"
            name="indexNumber"
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            name="name"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
          />
        </label>
        <label>
          Create password:
          <input
            type="password"
            name="password"
          />
        </label>
        <label>
          Faculty:
          <select>
            <option value="someOption">Faculty of Computing</option>
            <option value="otherOption">Faculty of Management</option>
            <option value="otherOption">Faculty of Applied Sciences</option>
          </select>
        </label>
        <label>
          Degree:
          <select>
            <option value="someOption">CIS</option>
            <option value="otherOption">SE</option>
            <option value="otherOption">CS</option>
          </select>
       
        </label>
        <label>
          Semester:
          <select>
            <option value="someOption">1</option>
            <option value="otherOption">2</option>
            <option value="otherOption">3</option>
            <option value="otherOption">4</option>
            <option value="otherOption">5</option>
            <option value="otherOption">6</option>
            <option value="otherOption">7</option>
            <option value="otherOption">8</option>
          </select>
          </label>
        <label>
          Admission Date:
          <input
            type="date"
            name="admissionDate"
          />
        </label>
        <button type="submit">Save Student</button>
      </form>
    </Modal>
  );
};

export default AddNewStudent;


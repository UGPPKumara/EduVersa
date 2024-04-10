import React, { useState } from 'react';
import Modal from 'react-modal';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../../../../../firebase/config';
import '../../Students/AddNewStudent/AddNewStudent.css';

const AddNewAluminus = ({ isOpen, onRequestClose }) => {
  const [alumnusData, setAlumnusData] = useState({
    profilePicture: null,
    indexNumber: '',
    name: '',
    email: '',
    password: '',
    faculty: 'Faculty of Computing',
    department: 'CIS',
    degree: 'CIS',
    admissionDate: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setAlumnusData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Upload profile picture to storage
      const profilePictureRef = ref(storage, `profilePictures/${alumnusData.profilePicture.name}`);
      await uploadBytes(profilePictureRef, alumnusData.profilePicture);
      const profilePictureURL = await getDownloadURL(profilePictureRef);

      // Save alumnus data to the "users" collection with userRole = "alumina"
      const docRef = await addDoc(collection(db, 'users'), {
        indexNumber: alumnusData.indexNumber,
        name: alumnusData.name,
        email: alumnusData.email,
        password: alumnusData.password,
        faculty: alumnusData.faculty,
        department: alumnusData.department,
        degree: alumnusData.degree,
        admissionDate: alumnusData.admissionDate,
        profilePictureURL: profilePictureURL, // Save profile picture URL
        userRole: "alumina"
      });

      console.log('Alumnus document ID:', docRef.id);
      onRequestClose();
    } catch (error) {
      console.error('Error adding alumnus: ', error);
    }
  };

  return (
    <Modal
      className="modal"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add New Alumnus"
    >
      <div className="modal-header">
        <h2>Add New Alumnus</h2>
        <button onClick={onRequestClose} className="close-button">
          &times;
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Profile Picture:
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            name="profilePicture"
          />
        </label>
        <label>
          Index Number:
          <input
            type="text"
            name="indexNumber"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Create password:
          <input
            type="password"
            name="password"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Faculty:
          <select
            name="faculty"
            value={alumnusData.faculty}
            onChange={handleChange}
            required
          >
            <option value="Faculty of Computing">Faculty of Computing</option>
            <option value="Faculty of Management">Faculty of Management</option>
            <option value="Faculty of Applied Sciences">Faculty of Applied Sciences</option>
          </select>
        </label>
        <label>
          Department:
          <select
            name="department"
            value={alumnusData.department}
            onChange={handleChange}
            required
          >
            <option value="CIS">CIS</option>
            <option value="SE">SE</option>
            <option value="CS">CS</option>
          </select>
        </label>
        <label>
          Degree:
          <select
            name="degree"
            value={alumnusData.degree}
            onChange={handleChange}
            required
          >
            <option value="CIS">CIS</option>
            <option value="SE">SE</option>
            <option value="CS">CS</option>
          </select>
        </label>
        <label>
          Admission Date:
          <input
            type="date"
            name="admissionDate"
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className='btn'>Save Alumnus</button>
      </form>
    </Modal>
  );
};

export default AddNewAluminus;

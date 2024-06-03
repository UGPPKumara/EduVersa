import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../../../../../firebase/config';

const AddNewStudent = ({ isOpen, onRequestClose }) => {
  const [studentData, setStudentData] = useState({
    profilePicture: null,
    indexNumber: '',
    name: '',
    email: '',
    password: '',
    faculty: '',
    degree: '',
    semester: '',
    admissionDate: ''
  });

  const [faculties, setFaculties] = useState([]);
  const [degrees, setDegrees] = useState([]);

  useEffect(() => {
    const fetchFaculties = async () => {
      try {
        const facultiesCollection = collection(db, 'faculties');
        const facultiesSnapshot = await getDocs(facultiesCollection);
        const facultyOptions = facultiesSnapshot.docs.map(doc => doc.data().facultyName);
        setFaculties(facultyOptions);
      } catch (error) {
        console.error('Error fetching faculties:', error);
      }
    };

    const fetchDegrees = async () => {
      try {
        const degreesCollection = collection(db, 'degrees');
        const degreesSnapshot = await getDocs(degreesCollection);
        const degreeOptions = degreesSnapshot.docs.map(doc => doc.data().degreeName);
        setDegrees(degreeOptions);
      } catch (error) {
        console.error('Error fetching degrees:', error);
      }
    };

    fetchFaculties();
    fetchDegrees();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const storageRef = ref(storage, `profilePictures/${studentData.profilePicture.name}`);
      await uploadBytes(storageRef, studentData.profilePicture);
      const downloadURL = await getDownloadURL(storageRef);

      // Save student data to the "users" collection with userRole = "student"
      await addDoc(collection(db, 'users'), {
        indexNumber: studentData.indexNumber,
        name: studentData.name,
        email: studentData.email,
        password: studentData.password,
        faculty: studentData.faculty,
        degree: studentData.degree,
        semester: studentData.semester,
        admissionDate: studentData.admissionDate,
        profilePictureURL: downloadURL,
        userRole: "student"
      });

      onRequestClose();
    } catch (error) {
      console.error('Error adding document: ', error);
    }
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
            value={studentData.indexNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={studentData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={studentData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Create password:
          <input
            type="password"
            name="password"
            value={studentData.password}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Faculty:
          <select
            name="faculty"
            value={studentData.faculty}
            onChange={handleChange}
            required
          >
            <option value="">Select Faculty</option>
            {faculties.map((faculty, index) => (
              <option key={index} value={faculty}>{faculty}</option>
            ))}
          </select>
        </label>
        <label>
          Degree:
          <select
            name="degree"
            value={studentData.degree}
            onChange={handleChange}
            required
          >
            <option value="">Select Degree</option>
            {degrees.map((degree, index) => (
              <option key={index} value={degree}>{degree}</option>
            ))}
          </select>
        </label>
        <label>
          Semester:
          <select
            name="semester"
            value={studentData.semester}
            onChange={handleChange}
            required
          >
            <option value="">Select Semester</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </label>
        <label>
          Admission Date:
          <input
            type="date"
            name="admissionDate"
            value={studentData.admissionDate}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="btn">Save Student</button>
      </form>
    </Modal>
  );
};

export default AddNewStudent;

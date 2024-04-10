import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../../../../../firebase/config';

const AddNewTeacher = ({ isOpen, onRequestClose }) => {
  const [teacherData, setTeacherData] = useState({
    profilePicture: null,
    indexNumber: '',
    name: '',
    email: '',
    password: '',
    faculty: '',
    department: '',
    admissionDate: ''
  });

  const [faculties, setFaculties] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchFaculties = async () => {
      try {
        const facultiesCollection = collection(db, 'faculties');
        const facultiesSnapshot = await getDocs(facultiesCollection);
        const facultiesData = facultiesSnapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().facultyName,
          departments: doc.data().department || [] // Use an empty array if department is not defined
        }));

        const uniqueFaculties = [...new Set(facultiesData.map(faculty => faculty.name))];

        setFaculties(uniqueFaculties);
        setDepartments(facultiesData);
      } catch (error) {
        console.error('Error fetching faculties:', error);
      }
    };

    fetchFaculties();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setTeacherData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Upload profile picture to storage
      const storageRef = ref(storage, `profilePictures/${teacherData.profilePicture.name}`);
      await uploadBytes(storageRef, teacherData.profilePicture);
      const downloadURL = await getDownloadURL(storageRef);
  
      // Add teacher data to Firestore
      const docRef = await addDoc(collection(db, 'users'), {
        indexNumber: teacherData.indexNumber,
        name: teacherData.name,
        email: teacherData.email,
        password: teacherData.password,
        faculty: teacherData.faculty,
        department: teacherData.department,
        admissionDate: teacherData.admissionDate,
        profilePictureURL: downloadURL,
        userRole: "teacher"
      });
  
      console.log('Document written with ID: ', docRef.id);
      onRequestClose(); // Close modal after successful submission
      alert('Teacher added successfully!');
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Failed to add teacher. Please try again.');
    }
  };

  return (
    <Modal
      className="modal"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add New Teacher"
    >
      <div className="modal-header">
        <h2>Add New Teacher</h2>
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
            value={teacherData.indexNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={teacherData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={teacherData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Create password:
          <input
            type="password"
            name="password"
            value={teacherData.password}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Faculty:
          <select
            name="faculty"
            value={teacherData.faculty}
            onChange={(e) => {
              setTeacherData({
                ...teacherData,
                faculty: e.target.value,
                department: '' // Reset department when faculty changes
              });
            }}
            required
          >
            <option value="">Select Faculty</option>
            {faculties.map(faculty => (
              <option key={faculty} value={faculty}>{faculty}</option>
            ))}
          </select>
        </label>
        <label>
          Department:
          <select
            name="department"
            value={teacherData.department}
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option>
            {departments
              .filter(faculty => faculty.name === teacherData.faculty)
              .flatMap(faculty => faculty.departments)
              .map((department, index) => (
                <option key={index} value={department}>{department}</option>
              ))
            }
          </select>
        </label>
        <label>
          Admission Date:
          <input
            type="date"
            name="admissionDate"
            value={teacherData.admissionDate}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className='btn'>Save Teacher</button>
      </form>
    </Modal>
  );
};

export default AddNewTeacher;

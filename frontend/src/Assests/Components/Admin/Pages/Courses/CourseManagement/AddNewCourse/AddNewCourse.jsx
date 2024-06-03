import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../../../../../firebase/config';

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

  const [faculties, setFaculties] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [teachers, setTeachers] = useState([]);

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

    const fetchTeachers = async () => {
      try {
        const teachersCollection = collection(db, 'users');
        const teachersQuery = query(teachersCollection, where('userRole', '==', 'teacher'));
        const teachersSnapshot = await getDocs(teachersQuery);
        const teachersData = teachersSnapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name
        }));

        setTeachers(teachersData);
      } catch (error) {
        console.error('Error fetching teachers:', error);
      }
    };

    fetchFaculties();
    fetchTeachers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({
      faculty: '',
      degree: '',
      year: '',
      semester: '',
      courseCode: '',
      courseName: '',
      teacher: ''
    });
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
        <label>
          Faculty:
          <select
            name="faculty"
            value={formData.faculty}
            onChange={(e) => {
              setFormData({
                ...formData,
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
          Degree:
          <input
            type="text"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Year of Study:
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Semester:
          <input
            type="text"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Course Code:
          <input
            type="text"
            name="courseCode"
            value={formData.courseCode}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Course Name:
          <input
            type="text"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Teacher:
          <select
            name="teacher"
            value={formData.teacher}
            onChange={handleChange}
            required
          >
            <option value="">Select Teacher</option>
            {teachers.map(teacher => (
              <option key={teacher.id} value={teacher.name}>{teacher.name}</option>
            ))}
          </select>
        </label>
        <button type="submit" className="btn">
          Add new course
        </button>
      </form>
    </Modal>
  );
};

export default AddNewCourse;

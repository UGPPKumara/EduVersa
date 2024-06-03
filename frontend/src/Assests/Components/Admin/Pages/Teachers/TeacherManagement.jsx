import React, { useState, useEffect } from 'react';
import AddNewTeacher from './AddNewTeacher/AddNewTeacher';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../../../firebase/config';
import '../Students/StudentManagement.css';
import './TeacherManagement.css';
import ProfilePicture from '../../../../Images/Frame 7.png';

const TeacherManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teachers, setTeachers] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const fetchTeachers = async () => {
      const teacherCollection = collection(db, 'users');
      const teacherSnapshot = await getDocs(teacherCollection);
      const teacherData = teacherSnapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter((teacher) => teacher.userRole === 'teacher');
      setTeachers(teacherData);
    };
    fetchTeachers();
  }, []);

  const handleDelete = async (teacherId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this teacher?');
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, 'users', teacherId));
        setTeachers(teachers.filter((teacher) => teacher.id !== teacherId));
        alert('Teacher deleted successfully!');
      } catch (error) {
        console.error('Error deleting teacher: ', error);
      }
    }
  };
  return (
    <>
      <div className="teacher-management">
        <div className="teacher-header">
          <h2>Teacher Management</h2>
          <button onClick={openModal} className="add-teacher-button btn">
            Add New Teacher
          </button>
        </div>

        <table className="teacher-table">
          <thead>
            <tr>
              <th>Profile Picture</th>
              <th>Index Number</th>
              <th>Name</th>
              <th>Email</th>
              <th>Faculty</th>
              <th>Department</th>
              <th>Admission Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.id}>
                <td className="profile-pic">
                  <img src={teacher.profilePictureURL || ProfilePicture} alt="teacher" />
                </td>
                <td>{teacher.indexNumber}</td>
                <td>{teacher.name}</td>
                <td>{teacher.email}</td>
                <td>{teacher.faculty}</td>
                <td>{teacher.department}</td>
                <td>{teacher.admissionDate}</td>
                <td className="action">
                  <button className="update btn">Update</button>
                  <button className="delete btn" onClick={() => handleDelete(teacher.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <AddNewTeacher isOpen={isModalOpen} onRequestClose={closeModal} />
      </div>
    </>
  );
};

export default TeacherManagement;

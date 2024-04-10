import React, { useState, useEffect } from 'react';
import AddNewStudent from './AddNewStudent/AddNewStudent';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../../../firebase/config';
import './StudentManagement.css';
import ProfilePicture from '../../../../Images/Frame 7.png';

const StudentManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [students, setStudents] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const fetchStudents = async () => {
      const studentCollection = collection(db, 'users');
      const studentSnapshot = await getDocs(studentCollection);
      const studentData = studentSnapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter((student) => student.userRole === 'student');
      setStudents(studentData);
    };
    fetchStudents();
  }, []);

  const handleDelete = async (studentId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this student?');
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, 'users', studentId));
        setStudents(students.filter((student) => student.id !== studentId));
        alert('Student deleted successfully!');
      } catch (error) {
        console.error('Error deleting student: ', error);
      }
    }
  };

  return (
    <>
      <div className="student-management">
        <div className="student-header">
          <h2>Student Management</h2>
          <button onClick={openModal} className="add-student-button btn">
            Add New Student
          </button>
        </div>

        <table className="student-table">
          <thead>
            <tr>
              <th>Profile Picture</th>
              <th>Index Number</th>
              <th>Name</th>
              <th>Email</th>
              <th>Faculty</th>
              {/* <th>Department</th> */}
              <th>Degree</th>
              <th>Semester</th>
              <th>Admission Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td className="profile-pic">
                  <img src={student.profilePictureURL || ProfilePicture} alt="student" />
                </td>
                <td>{student.indexNumber}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.faculty}</td>
                {/* <td>{student.department}</td> */}
                <td>{student.degree}</td>
                <td>{student.semester}</td>
                <td>{student.admissionDate}</td>
                <td className="action">
                  <button className="update btn">Update</button>
                  <button className="delete btn" onClick={() => handleDelete(student.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <AddNewStudent isOpen={isModalOpen} onRequestClose={closeModal} />
      </div>
    </>
  );
};

export default StudentManagement;

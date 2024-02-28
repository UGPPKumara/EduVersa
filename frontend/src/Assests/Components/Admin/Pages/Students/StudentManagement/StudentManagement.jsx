import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './StudentManagement.css'; // Import your CSS file for styling
import AddNewStudentPopup from '../../AddNewStudentPopup/AddNewStudentPopup';

const StudentManagement = () => {
  // Use state to manage student data
  const [students, setStudents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    // Fetch student data from your API or any data source
    // Update the state with the fetched data
    // Example: fetchStudents().then(data => setStudents(data));
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSave = (formData) => {
    // Implement API call to save data to MongoDB
    // Example: saveStudentData(formData).then(() => console.log('Student data saved'));
    // Update students state with the new data
    setStudents((prevStudents) => [...prevStudents, formData]);
  };


  return (
    <>
    <div className="student-management">
      <div className="student-header">
        <h2>Student Management</h2>
        <button onClick={openModal} className="add-student-button">
          Add New Student
        </button>
      </div>

      {/* Student List Table */}
      <table className="student-table">
        <thead>
          <tr>
            <th>Profile Picture</th>
            <th>Index Number</th>
            <th>Name</th>
            <th>Email</th>
            <th>Faculty</th>
            <th>Degree</th>
            <th>Semester</th>
            <th>Admission Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>
  {student.profilePicture && (
    <img src={student.profilePicture} alt={`Profile of ${student.name}`} />
  )}</td>
              <td>{student.indexNumber}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.faculty}</td>
              <td>{student.degree}</td>
              <td>{student.semester}</td>
              <td>{student.admissionDate}</td>
              <td>
                {/* Add links or buttons for actions (view, edit, delete) */}
                <Link to={`/StudentManagement/${student.id}`} className="view-link">
                  View
                </Link>
                <Link to={`/StudentManagement/${student.id}/edit`} className="edit-link">
                  Edit
                </Link>
                {/* Add a button or link to delete the student */}
                {/* Example: <button onClick={() => deleteStudent(student.id)}>Delete</button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddNewStudentPopup
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onSave={handleSave}
      />
    </div>
    </>
  );
};

export default StudentManagement;

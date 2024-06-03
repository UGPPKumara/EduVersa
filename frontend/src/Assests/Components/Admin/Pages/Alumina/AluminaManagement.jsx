import React, { useState, useEffect } from 'react';
import AddNewAluminus from './AddNewAlumina/AddNewAluminus';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../../../firebase/config';
import './AluminaManagement.css';
import ProfilePicture from '../../../../Images/Frame 7.png'; // Import your placeholder image

const AluminaManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alumni, setAlumni] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const fetchAlumni = async () => {
      const alumniCollection = collection(db, 'users');
      const alumniSnapshot = await getDocs(alumniCollection);
      const alumniData = alumniSnapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter((alumnus) => alumnus.userRole === 'alumina');
      setAlumni(alumniData);
    };
    fetchAlumni();
  }, []);

  const handleDelete = async (alumnusId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this alumnus?');
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, 'users', alumnusId));
        setAlumni(alumni.filter((alumnus) => alumnus.id !== alumnusId));
        alert('Alumnus deleted successfully!');
      } catch (error) {
        console.error('Error deleting alumnus: ', error);
      }
    }
  };

  return (
    <>
      <div className="alumina-management">
        <div className="alumina-header">
          <h2>Alumina Management</h2>
          <button onClick={openModal} className="add-alumina-button btn">
            Add New Aluminus
          </button>
        </div>

        <table className="alumina-table">
          <thead>
            <tr>
              <th>Profile Picture</th>
              <th>Index Number</th>
              <th>Name</th>
              <th>Email</th>
              <th>Faculty</th>
              <th>Department</th>
              <th>Degree</th>
              <th>Admission Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {alumni.map(alumnus => (
  <tr key={alumnus.id}>
    <td className="profile-pic">
      <img src={alumnus.profilePictureURL || ProfilePicture} alt="alumnus" />
    </td>
    <td>{alumnus.indexNumber}</td>
    <td>{alumnus.name}</td>
    <td>{alumnus.email}</td>
    <td>{alumnus.faculty}</td>
    <td>{alumnus.department}</td>
    <td>{alumnus.degree}</td>
    <td>{alumnus.admissionDate}</td>
    <td className="action">
      <button className="update btn">Update</button>
      <button className="delete btn" onClick={() => handleDelete(alumnus.id)}>Delete</button>
    </td>
  </tr>
))}
          </tbody>
        </table>
        <AddNewAluminus isOpen={isModalOpen} onRequestClose={closeModal} />
      </div>
    </>
  );
};

export default AluminaManagement;

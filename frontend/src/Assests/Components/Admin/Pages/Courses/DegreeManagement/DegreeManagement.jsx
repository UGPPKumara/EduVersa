import React, { useState, useEffect } from 'react';
import './DegreeManagement.css';
import AddNewDegree from './AddNewDegree/AddNewDegree';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import db from '../../../../../../firebase/config';

const DegreeManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [degrees, setDegrees] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addDegree = async (newDegree) => {
    try {
      // Add degree to Firestore
      const docRef = await addDoc(collection(db, 'degrees'), newDegree);
      console.log('Document written with ID: ', docRef.id);

      // Update degrees state with the new degree
      setDegrees([...degrees, newDegree]);
      closeModal();
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const deleteDegree = async (degreeId) => {
    // Confirmation message before deleting
    const confirmed = window.confirm('Are you sure you want to delete this degree?');
    if (!confirmed) return;

    try {
      // Delete degree from Firestore
      await deleteDoc(doc(db, 'degrees', degreeId));
      
      // Update degrees state by filtering out the deleted degree
      const updatedDegrees = degrees.filter(degree => degree.id !== degreeId);
      setDegrees(updatedDegrees);
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  };

  useEffect(() => {
    const fetchDegrees = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'degrees'));
        const degreesData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setDegrees(degreesData);
      } catch (error) {
        console.error('Error fetching degrees: ', error);
      }
    };

    fetchDegrees();
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className='degree-management'>
      <div className="degree-header">
        <h2>Degree Management</h2>
        <button onClick={openModal} className="add-degree-button btn">
          Add New Degree
        </button>
      </div>

      <table className="degree-table">
        <thead>
          <tr>
            <th>Degree Name</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {degrees.map((degree, index) => (
            <tr key={index}>
              <td>{degree.degreeName}</td>
              <td>{degree.department}</td>
              <td className='action'>
                <button className='update btn'>Update</button>
                <button className='delete btn' onClick={() => deleteDegree(degree.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <AddNewDegree isOpen={isModalOpen} onRequestClose={closeModal} addDegree={addDegree} />
    </div>
  );
}

export default DegreeManagement;

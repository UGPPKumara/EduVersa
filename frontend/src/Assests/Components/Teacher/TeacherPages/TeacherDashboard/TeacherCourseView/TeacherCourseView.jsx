import React, { useState, useEffect } from 'react';
import AddPresentation from '../TeacherCourseView/AddPresentation/AddPresentation';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../../../../firebase/config';

const TeacherCourseView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [presentations, setPresentations] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const fetchPresentations = async () => {
      try {
        const presentationsCollection = collection(db, 'presentations');
        const presentationsSnapshot = await getDocs(presentationsCollection);
        const presentationsData = presentationsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setPresentations(presentationsData);
      } catch (error) {
        console.error('Error fetching presentations: ', error);
      }
    };

    fetchPresentations();
  }, []);

  const handleDelete = async (presentationId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this presentation?');
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, 'presentations', presentationId));
        setPresentations(presentations.filter(presentation => presentation.id !== presentationId));
        alert('Presentation deleted successfully!');
      } catch (error) {
        console.error('Error deleting presentation: ', error);
      }
    }
  };

  return (
    <>
      <div className="teacher-management">
        <div className="teacher-header">
          <h2>Teacher Course View</h2>
          <button onClick={openModal} className="add-teacher-button btn">
            Add Presentation
          </button>
        </div>

        <table className="teacher-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Presentation</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {presentations.map(presentation => (
              <tr key={presentation.id}>
                <td>{presentation.title}</td>
                <td>{presentation.description}</td>
                <td>
                  <a href={presentation.presentation} target="_blank" rel="noopener noreferrer">View Presentation</a>
                </td>
                <td className="action">
                  <button className="update btn">Update</button>
                  <button className="delete btn" onClick={() => handleDelete(presentation.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <AddPresentation isOpen={isModalOpen} onRequestClose={closeModal} />
      </div>
    </>
  );
};

export default TeacherCourseView;

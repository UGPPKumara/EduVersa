import React, { useState, useEffect } from 'react';
import AddNewPath from './AddNewPath/AddNewPath';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../../../firebase/config';
// import './SelfLearningManagement.css'; // Import CSS if needed

const SelfLearningManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paths, setPaths] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const fetchPaths = async () => {
      try {
        const pathsCollection = collection(db, 'paths');
        const pathsSnapshot = await getDocs(pathsCollection);
        const pathsData = pathsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setPaths(pathsData);
      } catch (error) {
        console.error('Error fetching paths: ', error);
      }
    };

    fetchPaths();
  }, []);

  const handleDelete = async (pathId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this path?');
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, 'paths', pathId));
        setPaths(paths.filter(path => path.id !== pathId));
        alert('Path deleted successfully!');
      } catch (error) {
        console.error('Error deleting path: ', error);
      }
    }
  };

  return (
    <>
      <div className="teacher-management">
        <div className="teacher-header">
          <h2>Self Learning Path Management</h2>
          <button onClick={openModal} className="add-teacher-button btn">
            Add New Path
          </button>
        </div>

        <table className="teacher-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Documents</th>
              <th>Video Links</th> {/* Add new column for video links */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paths.map(path => (
              <tr key={path.id}>
                <td>{path.title}</td>
                <td>{path.description}</td>
                <td>
                  <a href={path.pdfURL} target="_blank" rel="noopener noreferrer">View PDF</a>
                </td>
                <td>
                  <a href={path.videoURL} target="_blank" rel="noopener noreferrer">View Video</a> {/* Display video link */}
                </td>
                <td className="action">
                  <button className="update btn">Update</button>
                  <button className="delete btn" onClick={() => handleDelete(path.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <AddNewPath isOpen={isModalOpen} onRequestClose={closeModal} />
      </div>
    </>
  );
};

export default SelfLearningManagement;

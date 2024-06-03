import React, { useState, useEffect } from 'react';
import './FacultyManagement.css'; // Make sure to create the CSS file
import AddNewFaculty from './AddNewFaculty/AddNewFaculty';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import db from '../../../../../../firebase/config';

const FacultyManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [faculties, setFaculties] = useState([]);
  const [facultyIdMap, setFacultyIdMap] = useState({});
  const [departmentIdMap, setDepartmentIdMap] = useState({});

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addFaculty = async (newFaculty) => {
    try {
      // Check if the faculty name already exists in the map
      let facultyId = facultyIdMap[newFaculty.facultyName];
      if (!facultyId) {
        // If the faculty name doesn't exist, generate a new ID
        facultyId = generateId(facultyIdMap);
        // Update the faculty ID map
        setFacultyIdMap({ ...facultyIdMap, [newFaculty.facultyName]: facultyId });
      }

      // Check if the department name already exists in the map
      let departmentId = departmentIdMap[newFaculty.department];
      if (!departmentId) {
        // If the department name doesn't exist, generate a new ID
        departmentId = generateId(departmentIdMap);
        // Update the department ID map
        setDepartmentIdMap({ ...departmentIdMap, [newFaculty.department]: departmentId });
      }

      // Add IDs to the newFaculty object
      const facultyWithIds = {
        ...newFaculty,
        facultyId: facultyId,
        departmentId: departmentId
      };

      // Add faculty to Firestore
      const docRef = await addDoc(collection(db, 'faculties'), facultyWithIds);
      console.log('Document written with ID: ', docRef.id);

      // Update faculties state with the new faculty
      setFaculties([...faculties, facultyWithIds]);
      closeModal();
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const deleteFaculty = async (facultyId) => {
    // Confirmation message before deleting
    const confirmed = window.confirm('Are you sure you want to delete this faculty?');
    if (!confirmed) return;

    try {
      // Delete faculty from Firestore
      await deleteDoc(doc(db, 'faculties', facultyId));
      
      // Update faculties state by filtering out the deleted faculty
      const updatedFaculties = faculties.filter(faculty => faculty.id !== facultyId);
      setFaculties(updatedFaculties);
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  };

  useEffect(() => {
    const fetchFaculties = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'faculties'));
        const facultiesData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setFaculties(facultiesData);

        // Build the facultyIdMap and departmentIdMap from existing data
        const newFacultyIdMap = {};
        const newDepartmentIdMap = {};
        facultiesData.forEach((faculty) => {
          newFacultyIdMap[faculty.facultyName] = faculty.facultyId;
          newDepartmentIdMap[faculty.department] = faculty.departmentId;
        });
        setFacultyIdMap(newFacultyIdMap);
        setDepartmentIdMap(newDepartmentIdMap);
      } catch (error) {
        console.error('Error fetching faculties: ', error);
      }
    };

    fetchFaculties();
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  // Function to generate a unique ID
  const generateId = (idMap) => {
    const existingIds = Object.values(idMap);
    const newId = existingIds.length + 1;
    return newId;
  };

  return (
    <div className='faculty-management'>
      <div className="faculty-header">
        <h2>Faculty Management</h2>
        <button onClick={openModal} className="add-faculty-button btn">
          Add New Faculty
        </button>
      </div>

      <table className="faculty-table">
        <thead>
          <tr>
            {/* <th>Faculty ID</th> */}
            <th>Faculty Name</th>
            {/* <th>Department ID</th> */}
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {faculties.map((faculty, index) => (
            <tr key={index}>
              {/* <td>{faculty.facultyId}</td> */}
              <td>{faculty.facultyName}</td>
              {/* <td>{faculty.departmentId}</td> */}
              <td>{faculty.department}</td>
              <td className='action'>
                <button className='update btn'>Update</button>
                <button className='delete btn' onClick={() => deleteFaculty(faculty.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <AddNewFaculty isOpen={isModalOpen} onRequestClose={closeModal} addFaculty={addFaculty} />
    </div>
  );
}

export default FacultyManagement;

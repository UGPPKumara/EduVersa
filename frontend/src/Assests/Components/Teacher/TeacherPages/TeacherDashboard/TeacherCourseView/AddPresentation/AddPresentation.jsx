import React, { useState } from 'react';
import Modal from 'react-modal';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../../../../../../firebase/config';
import '../../../../../Admin/Pages/Students/AddNewStudent/AddNewStudent.css';

const AddPresentation = ({ isOpen, onRequestClose }) => {
  const [presentationData, setPresentationData] = useState({
    title: '',
    description: '',
    presentation: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setPresentationData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Upload presentation PDF to Firebase Storage
      const presentationRef = ref(storage, `presentations/${presentationData.presentation.name}`);
      await uploadBytes(presentationRef, presentationData.presentation);
      const presentationURL = await getDownloadURL(presentationRef);
  
      // Save presentation data to Firestore
      await addDoc(collection(db, 'presentations'), {
        title: presentationData.title,
        description: presentationData.description,
        presentation: presentationURL
        // Add more fields as needed
      });
  
      onRequestClose();
      window.alert('Presentation saved successfully!');
    } catch (error) {
      console.error('Error adding presentation: ', error);
      window.alert('Error adding presentation. Please try again.');
    }
  };
  

  return (
    <Modal
      className="modal"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add New Presentation"
    >
      <div className="modal-header">
        <h2>Add New Presentation</h2>
        <button onClick={onRequestClose} className="close-button">
          &times;
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Title of New Presentation:
          <input
            type="text"
            name="title"
            value={presentationData.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={presentationData.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Presentation (PDF):
          <input
            type="file"
            accept="application/pdf"
            onChange={handleChange}
            name="presentation"
            required
          />
        </label>
        {/* Add more fields as needed */}
        <button type="submit" className='btn'>Save Presentation</button>
      </form>
    </Modal>
  );
};

export default AddPresentation;

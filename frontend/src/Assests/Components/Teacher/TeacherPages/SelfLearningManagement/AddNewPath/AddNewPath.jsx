import React, { useState } from 'react';
import Modal from 'react-modal';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../../../../../firebase/config';
import '../../../../Admin/Pages/Students/AddNewStudent/AddNewStudent.css';

const AddNewPath = ({ isOpen, onRequestClose }) => {
  const [pathData, setPathData] = useState({
    title: '',
    description: '',
    pdf: null,
    videoURL: '' // Add videoURL state
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setPathData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Upload PDF to Firebase Storage
      const pdfRef = ref(storage, `pdfs/${pathData.pdf.name}`);
      await uploadBytes(pdfRef, pathData.pdf);
      const pdfURL = await getDownloadURL(pdfRef);

      // Save path data to Firestore
      await addDoc(collection(db, 'paths'), {
        title: pathData.title,
        description: pathData.description,
        pdfURL: pdfURL,
        videoURL: pathData.videoURL // Save video URL along with other path data
      });

      onRequestClose();
    } catch (error) {
      console.error('Error adding path: ', error);
    }
  };

  return (
    <Modal
      className="modal"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add New Path"
    >
      <div className="modal-header">
        <h2>Add New Path</h2>
        <button onClick={onRequestClose} className="close-button">
          &times;
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Title of New Path:
          <input
            type="text"
            name="title"
            value={pathData.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={pathData.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Pdf:
          <input
            type="file"
            accept="application/pdf"
            onChange={handleChange}
            name="pdf"
            required
          />
        </label>
        <label>
          Video Link: {/* Add input field for video link */}
          <input
            type="url"
            name="videoURL"
            value={pathData.videoURL}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className='btn'>Save Path</button>
      </form>
    </Modal>
  );
};

export default AddNewPath;

import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../../firebase/config';
import './CourseView.css';

const CourseView = () => {
  const [presentations, setPresentations] = useState([]);

  useEffect(() => {
    const fetchPresentations = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'presentations'));
        const presentationsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPresentations(presentationsData);
      } catch (error) {
        console.error('Error fetching presentations: ', error);
      }
    };

    fetchPresentations();
  }, []);

  return (
    <div className="course-view">
      <div className="course-view-backlink">
        <a href="/student">Home</a> &gt; <a href="/student/CourseView">Web Developing</a>
      </div>
      {presentations.map(presentation => (
        <div className="course-view-content" key={presentation.id}>
          <div className="course-content-header">
            <h2>Topic : {presentation.title}</h2>
          </div>
          <div className="course-content-body">
            <p>Description: {presentation.description}</p>
            <a href={presentation.presentationURL} target="_blank" rel="noopener noreferrer">View Presentation</a>
          </div>
        </div>
      ))}
      {/* Add more sections for other course materials like assignments */}
    </div>
  );
};

export default CourseView;

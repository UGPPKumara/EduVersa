import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../../firebase/config';
import './StudentSelfLearning.css';

const StudentSelfLearning = () => {
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    const fetchPaths = async () => {
      try {
        const pathsCollection = collection(db, 'paths');
        const pathsSnapshot = await getDocs(pathsCollection);
        const pathsData = pathsSnapshot.docs.map(doc => ({
          id: doc.id,
          title: doc.data().title,
          description: doc.data().description,
          pdfURL: doc.data().pdfURL,
          videoURL: doc.data().videoURL
        }));
        setPaths(pathsData);
      } catch (error) {
        console.error('Error fetching paths: ', error);
      }
    };

    fetchPaths();
  }, []);

  return (
    <div className="selflearning">
      {paths.map(path => (
        <div key={path.id} className="item1">
          <div className="topic1box topic-header">
            <p className="topicm">{path.title}</p>
            <p id="description">{path.description}</p>
          </div>

          <div className="topic1box">
            <p id="topic1">Video Link</p>
            <div className="topic2box">
              <div><p><a href={path.videoURL}>Lesson 01</a></p></div>
            </div>
          </div>

          <div className="topic1box">
            <p id="topic1">Document</p>
            <div className="topic2box">
              <div><p><a href={path.pdfURL}>Pdf 01</a></p></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StudentSelfLearning;

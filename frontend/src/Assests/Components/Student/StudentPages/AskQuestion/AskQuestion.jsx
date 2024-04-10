// AskQuestion.jsx
import React, { useState, useEffect } from 'react';
import { collection, addDoc, query, orderBy, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../../../firebase/config';
import './AskQuestion.css';

const AskQuestion = ({ user }) => {
  const [questionText, setQuestionText] = useState('');
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const q = query(collection(db, 'questions'), orderBy('timestamp', 'desc'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setQuestions(data);
      });

      return unsubscribe;
    };

    fetchQuestions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'questions'), {
        text: questionText,
        user: user.displayName, // Add user's displayName to identify the asker
        timestamp: new Date()
      });
      setQuestionText('');
    } catch (error) {
      console.error('Error adding question: ', error);
    }
  };

  const handleQuestionDelete = async (questionId) => {
    try {
      await deleteDoc(doc(db, 'questions', questionId));
    } catch (error) {
      console.error('Error deleting question: ', error);
    }
  };

  return (
    <div className="ask-question">
      <h2>Ask a Question</h2>
      <form onSubmit={handleSubmit}>
  <textarea
    value={questionText}
    onChange={(e) => setQuestionText(e.target.value)}
    placeholder="Type your question here..."
    required
  />
  <button type="submit">Post Question</button>
</form>

      <div className="questions">
        <h3>Questions</h3>
        {questions.map(question => (
          <div key={question.id} className="question">
            <p>{question.text}</p>
            <p className="asker">Asked by: {question.user}</p> {/* Display the user's name */}
            <button onClick={() => handleQuestionDelete(question.id)}>Delete</button> {/* Delete button */}
            <Comments user={user} questionId={question.id} /> {/* Pass user prop to Comments component */}
          </div>
        ))}
      </div>
    </div>
  );
};

const Comments = ({ user, questionId }) => { // Add user prop
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const q = query(collection(db, 'questions', questionId, 'comments'), orderBy('timestamp', 'asc'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setComments(data);
      });

      return unsubscribe;
    };

    fetchComments();
  }, [questionId]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'questions', questionId, 'comments'), {
        text: commentText,
        user: user.displayName, // Add user's displayName to identify the commenter
        timestamp: new Date()
      });
      setCommentText('');
    } catch (error) {
      console.error('Error adding comment: ', error);
    }
  };

  const handleCommentDelete = async (commentId) => {
    try {
      await deleteDoc(doc(db, 'questions', questionId, 'comments', commentId));
    } catch (error) {
      console.error('Error deleting comment: ', error);
    }
  };

  return (
    <div className="comments">
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Add your comment..."
          required
        />
        <button type="submit">Post Comment</button>
      </form>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <p>{comment.text}</p>
            <p className="commenter">Comment by: {comment.user}</p> {/* Display the user's name */}
            <button onClick={() => handleCommentDelete(comment.id)}>Delete</button> {/* Delete button */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AskQuestion;

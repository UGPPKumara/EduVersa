import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css'; // Corrected import statement for CSS
import { db } from '../../../../firebase/config';
import { collection, query, where, getDocs } from 'firebase/firestore';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const requestPasswordReset = async (e) => {
    e.preventDefault();
    const dbref = collection(db, "users");

    try {
      const emailMatch = query(dbref, where('email', '==', email));
      const emailSnapshot = await getDocs(emailMatch);

      if (emailSnapshot.empty) {
        setAlertMessage('Email not found!');
      } else {
        // Here you would implement code to send a notification to the user's email
        // For example, you might use an email service like SendGrid or Firebase's email feature.
        // Once you send the email, you would inform the user that the request has been received.
        setAlertMessage('Password reset request received. Please check your email for further instructions.');
      }
    } catch (error) {
      setAlertMessage(error.message);
    }
  };

  return (
    <div className="forgot-password-form-container">
      <div className="forgot-password-form-container-fluid">
        <form className="forgot-password-form" onSubmit={requestPasswordReset}>
          {alertMessage && <div className="alert">{alertMessage}</div>}
          
          <h2>Forgot Password</h2>
          <div className="forgot-password-form-col">
            <label htmlFor="email" className="forgot-password-label">Email:</label>
            <input
              className="inbox"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit" className="request-password-btn">
              Request Password
            </button>
          </div>
          <Link to="/">Back to Login</Link>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;

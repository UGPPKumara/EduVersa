import React, { useState } from 'react'
import { Link,} from 'react-router-dom';
import './LoginForm.css'
import { db } from '../../../../firebase/config';
import { collection, getDocs, query, where } from 'firebase/firestore';

function LoginForm() {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const login = async (e) => {
      e.preventDefault();
      const dbref = collection(db, "users");

      try {
          const emailMatch = query(dbref, where('email', "==", username));
          const passwordMatch = query(dbref, where("password", "==", password));
          const emailSnapshot = await getDocs(emailMatch);
          const passwordSnapshot = await getDocs(passwordMatch);

          if (emailSnapshot.empty) {
              setAlertMessage('Invalid username!');
          } else if (passwordSnapshot.empty) {
              setAlertMessage('Invalid password!');
          }else  {
              const emailArray = emailSnapshot.docs.map((doc) => doc.data());
              const userRole = emailArray[0].userRole;

              if (userRole === 'admin') {
                  window.location.href = '/admin';
              } else if (userRole === "student") {
                  window.location.href = '/student';
              } else if (userRole === "teacher") {
                  window.location.href = '/teacher';
              }
              
              // Replace the current URL with the dashboard URL
              window.history.replaceState({}, '', window.location.href);
          }
      } catch (error) {
          setAlertMessage(error.message);
      }
  };

  return (
    <div className='login-form-container'>
      <div className="login-form-container-fluid">

      
      <form className='login-form' onSubmit={login}>
      {alertMessage && <div className="alert">{alertMessage}</div>}

        <h2>Login</h2>
        <div className='login-form-col'>
          <label htmlFor="username" className='login-label'>Username:</label>
          <input className='inbox'
            type="text"
            id="username"
            value={username}
            onChange={(e)=>
            setEmail(e.target.value)}
            required
            />
            
        </div>
        <div className='login-form-col '>
          <label htmlFor="password" className='login-label'>Password:</label>
          <input className='inbox'
            type="password"
            id="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
            
          />
        </div>
        <div>
          <button className="login-btn">
            Log in
          </button>
        </div>
            <Link to="/ForgotPassword" >Lost Password?</Link>
         
      </form>

            </div>
    </div>
  )
}

export default LoginForm
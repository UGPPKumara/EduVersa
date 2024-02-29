import React, { useState } from 'react';
import AdminRoutes from '../AdminRoutes/AdminRoutes';
import StudentRoutes from '../../Student/StudentRoutes/StudentRoutes';

import './Home.css';


const Home = () => {
  // Assume you have some state to determine if the user is an admin
  const [isAdmin, /*setIsAdmin*/] = useState(true); // Set to true for admin, false for student

  return (
    <div className='home'>
      {isAdmin ? <AdminRoutes /> : <StudentRoutes />}
    </div>
  );
};

export default Home;
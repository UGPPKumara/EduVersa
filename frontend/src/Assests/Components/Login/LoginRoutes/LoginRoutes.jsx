import React from 'react'
import {Routes, Route } from 'react-router-dom'

import LoginForm from '../LoginForm/LoginForm'

const LoginRoutes = () => {
  return (
    <Routes>
     <Route exact path='/LoginForm' element={<LoginForm/>} />
  </Routes>
  )
}

export default LoginRoutes
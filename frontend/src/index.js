import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
//Login
import UserLogin from './Assests/Components/Login/UserLogin/UserLogin';
import LoginForm from './Assests/Components/Login/LoginForm/LoginForm';
import ForgotPassword from './Assests/Components/Login/ForgotPassword/ForgotPassword';
//Admin
import Profile from './Assests/Components/Admin/Pages/Profile/Profile'; 
import AdminMain from './Assests/Components/Admin/Pages/AdminMain/AdminMain';
import AdminDashboard from './Assests/Components/Admin/Pages/Dashboard/AdminDashboard';
import StudentManagement from './Assests/Components/Admin/Pages/Students/StudentManagement';
import TeacherManagement from './Assests/Components/Admin/Pages/Teachers/TeacherManagement';
import AluminaManagement from './Assests/Components/Admin/Pages/Alumina/AluminaManagement';
import AdminLectures from './Assests/Components/Admin/Pages/Lectures/AdminLectures';
import CourseManagement from './Assests/Components/Admin/Pages/Courses/CourseManagement/CourseManagement';
import FacultyManagement from './Assests/Components/Admin/Pages/Courses/FacultyManagement/FacultyManagement';
import DegreeManagement from './Assests/Components/Admin/Pages/Courses/DegreeManagement/DegreeManagement';
//Student
import StudentMain from './Assests/Components/Student/StudentPages/StudentMain/StudentMain';
import StudentCourses from './Assests/Components/Student/StudentPages/StudentCourses/StudentCourses';
import CourseView from './Assests/Components/Student/StudentPages/CourseView/CourseView';
import StudentSelfLearning from './Assests/Components/Student/StudentPages/StudentSelfLearning/StudentSelfLearning';
//Teacher
import TeacherMain from './Assests/Components/Teacher/TeacherPages/TeacherMain/TeacherMain';
import TeacherDashboard from './Assests/Components/Teacher/TeacherPages/TeacherDashboard/TeacherDashboard';
import SelfLearninManagement from './Assests/Components/Teacher/TeacherPages/SelfLearningManagement/SelfLearningManagement';
import AskQuestion from './Assests/Components/Student/StudentPages/AskQuestion/AskQuestion';
import TeacherCourseView from './Assests/Components/Teacher/TeacherPages/TeacherDashboard/TeacherCourseView/TeacherCourseView';

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserLogin/>,
    children: [
      {
        index: true,
        element: <LoginForm/>
      },
      {
        path:'ForgotPassword',
        element:<ForgotPassword/>
      }
    ],
  },
  {
    path: '/admin',
    element: <AdminMain/>,
    children: [
      {
        index: true,
        element: <AdminDashboard/>
      },
      {
        path: 'StudentManagement',
        element: <StudentManagement/>
      },
      {
        path: 'TeacherManagement',
        element: <TeacherManagement/>
      },
      {
        path: 'AluminaManagement',
        element: <AluminaManagement/>
      },
      {
        path: 'AdminLecture',
        element: <AdminLectures/>
      },
      {
        path: 'AdminProfile',
        element: <Profile/>
      },
      {
        path: 'CourseManagement',
        element: <CourseManagement/>
      },
      {
        path: 'FacultyManagement',
        element: <FacultyManagement/>
      },
      {
        path: 'DegreeManagement',
        element: <DegreeManagement/>
      },
    ],
  },
  {
    path: '/student',
    element: <StudentMain/>,
    children: [
      {
        index: true,
        element: <StudentCourses/>
      },
      {
        path: 'CourseView',
        element: <CourseView/>
      },
      {
        path: 'StudentSelfLearning',
        element: <StudentSelfLearning/>
      },
      {
        path: 'AskQuestion',
        element: <AskQuestion/>
      },
      {
        path: 'Profile',
        element: <Profile/>
      },
    ],
  },
  {
    path: '/teacher',
    element: <TeacherMain/>,
    children :[
      {
        index: true,
        element: <TeacherDashboard/>
      },
      {
        path: 'TeacherProfile',
        element: <Profile/>
      },
      {
        path: 'SelfLearninManagement',
        element: <SelfLearninManagement/>
      },
      {
        path: 'TeacherCourseView',
        element: <TeacherCourseView/>
      },
      
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default router;
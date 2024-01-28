import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import './index.css'
import StudentDashboard from './Components/Student/StudentDashboard/StudentDashboard.jsx'
import StudentHome from './Components/Student/StudentHome/StudentHome.jsx'
import Hllo from './Components/hllo.jsx'
import Bye from './Components/Bye.jsx'
import StudentAttendance from './Components/Student/StudentAttendence/StudentAttendence.jsx'
import StudentProfile from './Components/Student/StudentProfile/StudentProfile.jsx'


  


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<StudentHome />}>
        <Route path="" element={<StudentDashboard />} />
        <Route path='profile' element={<StudentProfile/>}/>
        <Route path="attendence" element={<StudentAttendance/>} />
      </Route>
      <Route path="/parents" element={<Hllo />}>
        <Route path="bye" element={<Bye />} />
      </Route>
    </>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
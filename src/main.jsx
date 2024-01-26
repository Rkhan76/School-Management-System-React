import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import StudentDashboard from './Components/Student/StudentDashboard/StudentDashboard.jsx'
import StudentHome from './Components/Student/StudentHome/StudentHome.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<StudentHome/>}>
      <Route path='' element={<StudentDashboard/>} />
      
    </Route>
      
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
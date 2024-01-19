import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Components/Common/Navbar/Navbar.jsx'
import './index.css'
import StudentSideBar from './Components/Student/StudentSideBar.jsx'
import StudentDashboard from './Components/Student/StudentDashboard.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StudentDashboard/>
  </React.StrictMode>
)

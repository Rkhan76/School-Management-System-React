import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Components/Common/Navbar/Navbar.jsx'
import './index.css'
import StudentSideBar from './Components/Student/StudentSideBar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='flex bg-slate-500'>
      <StudentSideBar />
      <Navbar />
    </div>
  </React.StrictMode>
)

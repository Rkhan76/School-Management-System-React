import React from 'react'
import './studentDashboard.css'
import Navbar from '../Common/Navbar/Navbar'
import StudentSideBar from './StudentSideBar'
import StudentMainContent from './studentMainContent'

function StudentDashboard() {
  return (
    <div style={{ display: 'flex' }}>
      <StudentSideBar />
      <div style={{ width: '100%' }}>
        <Navbar />
        <div className="dashboardContentContainer">
          <StudentMainContent />
          <StudentMainContent />
          <StudentMainContent />
          <StudentMainContent />
          <StudentMainContent />
          <StudentMainContent />
          <StudentMainContent />
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard

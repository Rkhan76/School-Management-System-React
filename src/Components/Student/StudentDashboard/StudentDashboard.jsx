import React from 'react'
import './studentDashboard.css'
import Navbar from '../../Common/Navbar/Navbar'
import StudentSideBar from '../StudentSideBar'
import DashboardPageComponents from '../../Common/dashboardPageComponents/DashboardPageComponents'

function StudentDashboard() {
  return (
    <div className="flex">
      <StudentSideBar />
      <div className="w-full">
        <Navbar />
        <div className="dashboardContentContainer">
          <DashboardPageComponents />
          <DashboardPageComponents />
          <DashboardPageComponents />
          <DashboardPageComponents />
          <DashboardPageComponents />
          <DashboardPageComponents />
          <DashboardPageComponents />
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard

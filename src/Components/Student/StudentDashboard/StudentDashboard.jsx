import React from 'react'
import './studentDashboard.css'

import DashboardPageComponents from '../../Common/dashboardPageComponents/DashboardPageComponents'
import profileIcon from '../../../assets/profileIcon.svg'
import attedenceIcon from '../../../assets/attendenceIcon.svg'
import resultIcon from '../../../assets/resultIcon.svg'
import timeTableIcon from '../../../assets/timeTableIcon.svg'
import assignmentIcon from '../../../assets/assignmentIcon.svg'
import noticeIcon from '../../../assets/noticeIcon.svg'
import feedbackIcon from '../../../assets/feedbackIcon.svg'
import passwordChangeIcon from '../../../assets/passwordChangeIcon.svg'

function StudentDashboard() {
  return (
    <div className="dashboardContentContainer">
      <DashboardPageComponents
        icon={profileIcon}
        title="Profile"
        to="/student/profile"
      />
      <DashboardPageComponents
        icon={attedenceIcon}
        title="Attendence"
        to="/student/attendence"
      />
      <DashboardPageComponents
        icon={resultIcon}
        title="Result"
        to="/student/result"
      />
      <DashboardPageComponents
        icon={timeTableIcon}
        title="Time Table"
        to="/student/timetable"
      />
      <DashboardPageComponents
        icon={assignmentIcon}
        title="Assignment"
        to="/student/assignment"
      />
      <DashboardPageComponents
        icon={noticeIcon}
        title="Notice"
        to="/student/notice"
      />
      <DashboardPageComponents
        icon={feedbackIcon}
        title="Teacher Feedback"
        to="/student/feedback"
      />
      <DashboardPageComponents
        icon={passwordChangeIcon}
        title="Change Password"
      />
    </div>
  )
}

export default StudentDashboard

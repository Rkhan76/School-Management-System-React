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
      <DashboardPageComponents icon={profileIcon} title="Profile"/>
      <DashboardPageComponents icon={attedenceIcon} title="Attendence" />
      <DashboardPageComponents icon={resultIcon} title="Result" />
      <DashboardPageComponents icon={timeTableIcon} title="Time Table" />
      <DashboardPageComponents icon={assignmentIcon} title="Assignment" />
      <DashboardPageComponents icon={noticeIcon} title="Notice" />
      <DashboardPageComponents icon={feedbackIcon} title="Teacher Feedback" />
      <DashboardPageComponents icon={passwordChangeIcon} title="Change Password"/>
    </div>
  )
}

export default StudentDashboard

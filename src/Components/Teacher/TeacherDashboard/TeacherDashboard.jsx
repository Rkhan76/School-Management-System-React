import React from 'react'

import DashboardPageComponents from '../../Common/dashboardPageComponents/DashboardPageComponents'
import profileIcon from '../../../assets/profileIcon.svg'
import attedenceIcon from '../../../assets/attendenceIcon.svg'
import resultIcon from '../../../assets/resultIcon.svg'
import timeTableIcon from '../../../assets/timeTableIcon.svg'
import assignmentIcon from '../../../assets/assignmentIcon.svg'
import noticeIcon from '../../../assets/noticeIcon.svg'
import passwordChangeIcon from '../../../assets/passwordChangeIcon.svg'
import teacherAttendence from '../../../assets/teacherAttendence.svg'
import teacherSchedule from '../../../assets/teacherSchedule.svg'
import studentDetails from '../../../assets/studentDetails.svg'
import teacherReviews from '../../../assets/teacherReviews.svg'

function TeacherDashboard() {
  return (
    <div className="dashboardContentContainer">
      <DashboardPageComponents icon={profileIcon} title="Profile" />
      <DashboardPageComponents icon={teacherAttendence} title="Attendence" />
      <DashboardPageComponents icon={teacherSchedule} title="Time Table" />
      <DashboardPageComponents icon={studentDetails} title="Student Details" />
      <DashboardPageComponents icon={attedenceIcon} title="Student Attendence" />
      <DashboardPageComponents icon={resultIcon} title="Student Result" />
      <DashboardPageComponents icon={timeTableIcon} title="Students Time Table" />
      <DashboardPageComponents icon={assignmentIcon} title="Assignment" />
      <DashboardPageComponents icon={noticeIcon} title="Notice" />
      <DashboardPageComponents icon={teacherReviews} title="Reviews" />
      <DashboardPageComponents
        icon={passwordChangeIcon}
        title="Change Password"
      />
    </div>
  )
}

export default TeacherDashboard

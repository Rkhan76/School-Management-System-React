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
      <DashboardPageComponents
        icon={profileIcon}
        title="Profile"
        to="/teacher/profile"
      />
      {/* <DashboardPageComponents
        icon={teacherAttendence}
        title="Attendence"
        to="/teacher/profile"
      /> */}
      {/* <DashboardPageComponents
        icon={teacherSchedule}
        title="Time Table"
        to="/teacher/profile"
      /> */}
      {/* <DashboardPageComponents
        icon={studentDetails}
        title="Student Details"
        to="/teacher/profile"
      /> */}
      <DashboardPageComponents
        icon={attedenceIcon}
        title="Student Attendence"
      />
      <DashboardPageComponents
        icon={resultIcon}
        title="Student Result"
        to="/teacher/profile"
      />
      <DashboardPageComponents
        icon={timeTableIcon}
        title="Students Time Table"
        to="/teacher/profile"
      />
      <DashboardPageComponents
        icon={assignmentIcon}
        title="Assignment"
        to="/teacher/assignment"
      />
      <DashboardPageComponents
        icon={noticeIcon}
        title="Notice"
        to="/teacher/profile"
      />
      {/* <DashboardPageComponents
        icon={teacherReviews}
        title="Reviews"
        to="/teacher/profile"
      />
      <DashboardPageComponents
        icon={passwordChangeIcon}
        title="Change Password"
        to="/teacher/profile"
      /> */}
    </div>
  )
}

export default TeacherDashboard

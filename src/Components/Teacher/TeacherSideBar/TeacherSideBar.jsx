import React from 'react'

import SideBarHeader from '../../Common/sideBarHeader/SideBarHeader'
import SideBarComponent from '../../Common/sideBarComponent/SideBarComponent'

import studentDetails from '../../../assets/studentDetails.svg'
import dashBoardIcon from '../../../assets/dashBoardIcon.svg'
import profileIcon from '../../../assets/profileIcon.svg'
import attedenceIcon from '../../../assets/attendenceIcon.svg'
import resultIcon from '../../../assets/resultIcon.svg'
import timeTableIcon from '../../../assets/timeTableIcon.svg'
import assignmentIcon from '../../../assets/assignmentIcon.svg'
import noticeIcon from '../../../assets/noticeIcon.svg'
import feedbackIcon from '../../../assets/feedbackIcon.svg'

function TeacherSideBar() {
  return (
    <div className="text-white" style={{ backgroundColor: '#052955' }}>
      <SideBarHeader />
      <SideBarComponent
        componentName="Dashboard"
        componentIcon={dashBoardIcon}
        to="/teacher"
      />
      <SideBarComponent
        componentName="Profile"
        componentIcon={profileIcon}
        to="/teacher/profile"
      />
      <SideBarComponent
        componentName="Attendence"
        componentIcon={attedenceIcon}
        to="/teacher/attendence"
      />
      <SideBarComponent
        componentName="Time-Table"
        componentIcon={timeTableIcon}
        to="/teacher/time-table"
      />
      <SideBarComponent
        componentName="Student Details"
        componentIcon={studentDetails}
        to=""
      />
      <SideBarComponent
        componentName="Student Attd"
        componentIcon={attedenceIcon}
        to=""
      />

      <SideBarComponent
        componentName="Result"
        componentIcon={resultIcon}
        to="/teacher/result"
      />

      <SideBarComponent
        componentName="Assignment"
        componentIcon={assignmentIcon}
        to="/teacher/assignment"
      />
      <SideBarComponent
        componentName="Notice"
        componentIcon={noticeIcon}
        to="/teacher/notice"
      />
      <SideBarComponent
        componentName="Feedback"
        componentIcon={feedbackIcon}
        to="/teacher/feedback"
      />
    </div>
  )
}

export default TeacherSideBar

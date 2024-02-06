import React from 'react'

import SideBarHeader from '../../Common/sideBarHeader/SideBarHeader'
import SideBarComponent from '../../Common/sideBarComponent/SideBarComponent'


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
      <SideBarComponent componentName="Dashboard" componentIcon={dashBoardIcon} />
      <SideBarComponent componentName="Profile" componentIcon={profileIcon} />
      <SideBarComponent componentName="Attendence" componentIcon={attedenceIcon} />
      <SideBarComponent componentName="Result" componentIcon={resultIcon} />
      <SideBarComponent componentName="Time-Table" componentIcon={timeTableIcon} />
      <SideBarComponent componentName="Assignment" componentIcon={assignmentIcon} />
      <SideBarComponent componentName="Notice" componentIcon={noticeIcon} />
      <SideBarComponent componentName="Feedback" componentIcon={feedbackIcon}
      />
    </div>
  )
}

export default TeacherSideBar

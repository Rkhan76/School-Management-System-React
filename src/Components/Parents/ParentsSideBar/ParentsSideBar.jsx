import React from 'react'

import SideBarHeader from '../../Common/sideBarHeader/SideBarHeader'
import SideBarComponent from '../../Common/sideBarComponent/SideBarComponent'

function ParentsSideBar() {
  return (
    <div className="text-white" style={{ backgroundColor: '#052955' }}>
      <SideBarHeader />
      <SideBarComponent
        componentName="Dashboard"
        componentIcon={dashBoardIcon}
      />
      <SideBarComponent componentName="Profile" componentIcon={profileIcon} />
      <SideBarComponent
        componentName="Attendence"
        componentIcon={attedenceIcon}
      />
      <SideBarComponent componentName="Result" componentIcon={resultIcon} />
      <SideBarComponent
        componentName="Time-Table"
        componentIcon={timeTableIcon}
      />
      <SideBarComponent
        componentName="Assignment"
        componentIcon={assignmentIcon}
      />
      <SideBarComponent componentName="Notice" componentIcon={noticeIcon} />
      <SideBarComponent componentName="Feedback" componentIcon={feedbackIcon} />
    </div>
  )
}

export default ParentsSideBar

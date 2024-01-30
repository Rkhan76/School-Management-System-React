import React from 'react'

import SideBarHeader from '../../Common/sideBarHeader/SideBarHeader'
import SideBarComponent from '../../Common/sideBarComponent/SideBarComponent'

function TeacherSideBar() {
  return (
    <div
      className="text-white"
      style={{ backgroundColor: '#052955' }}
    >
      <SideBarHeader />
      <SideBarComponent />
      <SideBarComponent />
      <SideBarComponent />
      <SideBarComponent />
      <SideBarComponent />
      <SideBarComponent />
      <SideBarComponent />
    </div>
  )
}

export default TeacherSideBar

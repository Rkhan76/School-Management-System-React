import React from 'react'
import './StudentSideBar.css'
import SideBarHeader from '../Common/sideBarHeader/SideBarHeader'
import SideBarComponent from '../Common/sideBarComponent/SideBarComponent'

function StudentSideBar() {
  return (
    <div className="hello">
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

export default StudentSideBar

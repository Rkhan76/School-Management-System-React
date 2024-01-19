import React from 'react'
import './sideBarComponent.css'
import forwardIcon from '../../../assets/forwardIcon.svg'
import dashBoardIcon from '../../../assets/dashBoardIcon.svg'

function SideBarComponent() {
  return (
    <>
      <div className="sideBarComponent">
        <img className="h-6 w-6 mt-2" src={dashBoardIcon} alt="DashboardIcon" />
        <div className="mt-1 text-lg">
          <p>Dashboard</p>
        </div>
        <img className="h-8 w-8 mt-1.5" src={forwardIcon} alt="forwardIcon" />
      </div>
      <hr style={{ borderColor: 'black', width:"250px" }} />
    </>
  )
}

export default SideBarComponent

import React from 'react'
import { Link } from 'react-router-dom'
import './sideBarComponent.css'
import forwardIcon from '../../../assets/forwardIcon.svg'

function SideBarComponent({ componentName, componentIcon, to }) {
 console.log(to)
  return (
    <>
      <Link to={to} className="sideBarComponent">
        <img className="h-6 w-6 mt-2" src={componentIcon} alt="DashboardIcon" />
        <div className="mt-1 text-lg">
          <p>{componentName}</p>
        </div>
        <img className="h-8 w-8 mt-1.5" src={forwardIcon} alt="forwardIcon" />
      </Link>
      <hr style={{ borderColor: 'black', width: '250px' }} />
    </>
  )
}

export default SideBarComponent

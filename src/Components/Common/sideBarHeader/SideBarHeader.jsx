import React from 'react'
import './sideBarHeader.css'
import optionButtonIcon from '../../../assets/optionButtonIcon.svg'
import schoolLogo from '../../../assets/schoolLogo.jpg'

function SideBarHeader() {
  return (
    <div className='sideBarHeader'>
        <img src={schoolLogo} className='h-11 w-11 rounded-3xl' alt="SchoolLogo" />
        <img src={optionButtonIcon} className='h-11 w-11' alt="optionButton" />
    </div>
  )
}

export default SideBarHeader

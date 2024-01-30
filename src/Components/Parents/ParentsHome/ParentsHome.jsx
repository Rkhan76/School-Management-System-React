import React from 'react'
import { Outlet } from 'react-router-dom'

import ParentsSideBar from '../ParentsSideBar/ParentsSideBar'
import Navbar from '../../Common/Navbar/Navbar'

function ParentsHome() {
  return (
    <div className="flex h-screen">
      <ParentsSideBar/>
      <div className="w-full">
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}

export default ParentsHome

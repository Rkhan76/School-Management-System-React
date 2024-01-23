import React from "react";
import "./dashboardPageComponent.css"

import messageIcon from '../../../assets/messageIcon.svg'

function DashboardPageComponents(){
    return (
      <div className="dashboardPageComponent rounded-lg">
        <div className="flex justify-center pt-2">
          <div className="rounded-full h-20 w-20 flex items-center justify-center bg-white">
            <img className="h-10 w-10" src={messageIcon} alt="" />
          </div>
        </div>
        <h1 className="text-center pt-2 text-lg">Admit Card</h1>
      </div>
    )
}

export default DashboardPageComponents
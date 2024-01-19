import React from "react";

import messageIcon from '../../../assets/messageIcon.svg'

function DashboardPageComponents(){
    return(
        <div className="bg-green-400">
            <img className="h-3 w-3" src={messageIcon} alt="" />
            <h1>Admit Card</h1>
        </div>
    )
}

export default DashboardPageComponents
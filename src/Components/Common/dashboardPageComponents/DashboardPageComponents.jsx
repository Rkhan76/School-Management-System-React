import React from "react";
import "./dashboardPageComponent.css"
import { Link } from "react-router-dom";


function DashboardPageComponents({icon, title,to}){
    return (
      <Link to={to} className="dashboardPageComponent rounded-lg">
        <div className="flex justify-center pt-1">
          <div className="rounded-full h-20 w-20 flex items-center justify-center bg-white">
            <img className="h-10 w-10" src={icon}/> 
          </div>
        </div>
        <h1 className="text-center pt-1 pb-1 text-lg">{title}</h1>
      </Link>
    )
}

export default DashboardPageComponents
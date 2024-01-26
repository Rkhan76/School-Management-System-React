import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from '../../Common/Navbar/Navbar'
import StudentSideBar from '../StudentSideBar'
import StudentDashboard from "../StudentDashboard/StudentDashboard";

function StudentHome(){
    return (
      <div className="flex">
        <StudentSideBar />
        <div className="w-full">
          <Navbar />
          <Outlet/>
        </div>
      </div>
    )
}

export default StudentHome
import React from "react";
import { Outlet } from "react-router-dom";

import TeacherSideBar from "../TeacherSideBar/TeacherSideBar";
import Navbar from "../../Common/Navbar/Navbar";

function TeacherHome(){
    return (
      <div className="flex h-screen">
        <TeacherSideBar />
        <div className="w-full">
          <Navbar/>
          <Outlet />
        </div>
      </div>
    )
}

export default TeacherHome
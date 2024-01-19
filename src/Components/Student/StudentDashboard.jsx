import React from "react";
import Navbar from "../Common/Navbar/Navbar";
import StudentSideBar from "./StudentSideBar";
import StudentMainContent from "./studentMainContent";


function StudentDashboard(){
    return (
      <div style={{ display: 'flex' }}>
        <StudentSideBar />
        <div style={{ width: '100%' }}>
          <Navbar />
          <div
            className="w-20"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '10px',
            }}
          >
            <StudentMainContent />
            <StudentMainContent />
            <StudentMainContent />
            <StudentMainContent />
            <StudentMainContent />
            <StudentMainContent />
            <StudentMainContent />
          </div>
        </div>
      </div>
    )
}

export default StudentDashboard
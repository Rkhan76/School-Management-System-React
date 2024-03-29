import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import './index.css'
import StudentDashboard from './Components/Student/StudentDashboard/StudentDashboard.jsx'
import StudentHome from './Components/Student/StudentHome/StudentHome.jsx'
import StudentAttendance from './Components/Student/StudentAttendence/StudentAttendence.jsx'
import StudentProfile from './Components/Student/StudentProfile/StudentProfile.jsx'
import StudentResult from './Components/Student/StudentResult/StudentResult.jsx'
import StudentTimeTable from './Components/Student/StudentTimeTable/StudentTimeTable.jsx'
import StudentAssignment from './Components/Student/StudentAssignment.jsx'
import Notice from './Components/Student/Notice/Notice.jsx'

import TeacherHome from './Components/Teacher/TeacherHome/TeacherHome.jsx'
import TeacherSideBar from './Components/Teacher/TeacherSideBar/TeacherSideBar.jsx'
import TeacherDashboard from './Components/Teacher/TeacherDashboard/TeacherDashboard.jsx'
import StudentResultPost from './Components/Teacher/StudentResultPost.jsx'
import AssignmentPost from './Components/Teacher/AssignmentPost.jsx'

import ParentsHome from './Components/Parents/ParentsHome/ParentsHome.jsx'
import ParentsDashboard from './Components/Parents/ParentsDashboard/ParentsDashboard.jsx'
import AdminHome from './Components/Admin/AdminHome/AdminHome.jsx'
import AdminDashboard from './Components/Admin/AdminDashboard/AdminDashboard.jsx'
import ParentsProfile from './Components/Parents/ParentsProfile/ParentsProfile.jsx'
import TeacherProfile, {
  teacherProfileInfoLoader,
} from './Components/Teacher/TeacherProfile/TeacherProfile.jsx'
import AdminProfile from './Components/Admin/AdminProfile/AdminProfile.jsx'
import SignIn from './Components/SignIn/SignIn.jsx'
import SignUp from './Components/SignUp/SignUp.jsx'
import { handleGetStudentProfile } from './fetching/fetch'
import StudentAttendancePost from './Components/Teacher/StudentAttendancePost.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/">
        <Route path="SignIn" element={<SignIn />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="student" element={<StudentHome />}>
          <Route path="" element={<StudentDashboard />} />
          <Route
            path="profile"
            loader={handleGetStudentProfile}
            element={<StudentProfile />}
          />
          <Route path="attendence" element={<StudentAttendance />} />
          <Route path="result" element={<StudentResult />} />
          <Route path="timetable" element={<StudentTimeTable />} />
          <Route path="assignment" element={<StudentAssignment />} />
          <Route path="notice" element={<Notice />} />
        </Route>
        <Route path="teacher" element={<TeacherHome />}>
          <Route path="" element={<TeacherDashboard />} />
          <Route
            loader={teacherProfileInfoLoader}
            path="profile"
            element={<TeacherProfile />}
          />
          <Route path="profile" element={<TeacherProfile />} />
          <Route path="profile" element={<TeacherProfile />} />
          <Route path="profile" element={<TeacherProfile />} />
          <Route
            path="student-attendance"
            element={<StudentAttendancePost />}
          />
          <Route path="student-result" element={<StudentResultPost />} />
          <Route path="assignment" element={<AssignmentPost />} />
        </Route>
        <Route path="parents" element={<ParentsHome />}>
          <Route path="" element={<ParentsDashboard />} />
          <Route path="profile" element={<ParentsProfile />} />
        </Route>
        <Route path="admin" element={<AdminHome />}>
          <Route path="" element={<AdminDashboard />} />
          <Route path="profile" element={<AdminProfile />} />
        </Route>
      </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

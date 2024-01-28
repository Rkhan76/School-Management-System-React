import React from 'react'
import './StudentAttendence.css'

function StudentAttendance() {
  const Attendence = {        /// data will fetch by api from backend
    Jan: [true,false,true],
    fab: [false]
  }
  const sessionArray = [2000,2001,2001]

  const sessions = sessionArray.map((session)=>{
     return <option value={session}>{session}</option>
  })

  const JanAttendence = Attendence.Jan.map((day)=>{
    return (day==true )? <td>P</td> : <td>A</td>
  })

 
  const date = Array.from({ length: 31 }, (_, index) => (
    <th key={index + 1}>{index + 1}</th>
  ))

  return (
    <div>
      <div className="m-10 bg-gray-400 rounded-md">
        <h1 className="p-5 text-3xl">Student Attendence</h1>
        <div className="p-4">
          <label className="p-4 text-lg" htmlFor="Session">
            Select Session
          </label>
          <select className="p-2 w-60 rounded-sm outline-none">
            {sessions}
          </select>
        </div>
      </div>
      <table className="attendance-table m-10">
        <thead>
          <th>Month</th>
          {date}
          <th>Total</th>
        </thead>
        <tbody>
          <tr>
            <td>January</td>
            {JanAttendence}
            <td>2</td>
          </tr>
          <tr>
            <td>February</td>
          </tr>
          <tr>
            <td>March</td>
          </tr>
          <tr>
            <td>Aprail</td>
          </tr>
          <tr>
            <td>May</td>
          </tr>
          <tr>
            <td>June</td>
          </tr>
          <tr>
            <td>July</td>
          </tr>
          <tr>
            <td>August</td>
          </tr>
          <tr>
            <td>September</td>
          </tr>
          <tr>
            <td>October</td>
          </tr>
          <tr>
            <td>November</td>
          </tr>
          <tr>
            <td>December</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default StudentAttendance

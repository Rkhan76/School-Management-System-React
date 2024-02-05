import React from 'react'
import './StudentAttendence.css'

function StudentAttendance() {
  

  const sessionArray = [2000,2001,2001]

  const sessions = sessionArray.map((session)=>{
     return <option value={session}>{session}</option>
  })

  const Attendence = [
    {
      monthName: 'January',
      days: {
        1: false,
        2: true,
        3: false,
        4: true,
        5: false,
        6: true,
        7: false,
        8: true,
        9: true,
        10: true,
        11: false,
        12: false,
        13: true,
        14: false,
        15: true,
        16: true,
        17: true,
        18: false,
        19: true,
        20: false,
        21: true,
        22: false,
        23: true,
        24: false,
        25: true,
        26: false,
        27: false,
        28: true,
        29: true,
        30: true,
        31: false,
      },
    },
    {
      monthName: 'Fabruary',
      days: {
        1: false,
        2: true,
        3: false,
        4: true,
        5: false,
        6: true,
        7: false,
        8: true,
        9: true,
        10: true,
        11: false,
        12: false,
        13: true,
        14: false,
        15: true,
        16: true,
        17: true,
        18: false,
        19: true,
        20: false,
        21: true,
        22: false,
        23: true,
        24: false,
        25: true,
        26: false,
        27: false,
        28: true,
        29: true,
        30: true,
        31: false,
      },
    },
  ]
 
  const date = Array.from({ length: 31 }, (_, index) => (
    <th key={index + 1}>{index + 1}</th>
  ))

  const monthAttendence = Attendence.map((month) => {
    let totalPresent = 0;
    let totalAbsent = 0;
    return (
      <tr>
        <td>{month.monthName}</td>
        {
          Object.values(month.days).map((day)=>{
            day == true ? totalPresent+1 : totalAbsent+1
            return (
              day == true ? <td>P</td> : <td>A</td>
              )
          })
        }
        <td>{totalPresent}</td>
      </tr>
    )
    
    
  })

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
          {monthAttendence}
        </tbody>
      </table>
    </div>
  )
}

export default StudentAttendance

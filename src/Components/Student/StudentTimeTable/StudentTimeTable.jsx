import React from 'react'
import './StudentTimeTable.css'

function StudentTimeTable() {
  const studentClassSchedule = {
    Monday: {
      'Period-1': 'History',
      'Period-2': 'Math',
      'Period-3': 'English',
      'Period-4': 'Science',
      'LunchBreak': 'Lunch',
      'Period-5': 'Computer Science',
      'Period-6': 'Physical Education',
      'Period-7': 'Art',
      'Period-8': 'Music',
    },
    Tuesday: {
      'Period-1': 'Math',
      'Period-2': 'Science',
      'Period-3': 'English',
      'Period-4': 'History',
      'LunchBreak': 'Lunch',
      'Period-5': 'Physical Education',
      'Period-6': 'Computer Science',
      'Period-7': 'Music',
      'Period-8': 'Art',
    },
  }

  const dayWiseTime = Object.entries(studentClassSchedule).map(([day, schedule]) => {
      return (
        <tr key={day}>
          <td>{day}</td>
          <td>{schedule['Period-1']}</td>
          <td>{schedule['Period-2']}</td>
          <td>{schedule['Period-3']}</td>
          <td>{schedule['Period-4']}</td>
          <td>{schedule['LunchBreak']}</td>
          <td>{schedule['Period-5']}</td>
          <td>{schedule['Period-6']}</td>
          <td>{schedule['Period-7']}</td>
          <td>{schedule['Period-8']}</td>
        </tr>
      )
    }
  )


  return (
    <div>
      <table className="attendance-table">
        <tr>
          <th colSpan={10}>Time Table</th>
        </tr>
        <tr>
          <th>Day/Period</th>
          <th>Period-1</th>
          <th>Period-2</th>
          <th>Period-3</th>
          <th>Period-4</th>
          <th>Lunch Break</th>
          <th>Period-5</th>
          <th>Period-6</th>
          <th>Period-7</th>
          <th>Period-8</th>
        </tr>
        {dayWiseTime}
      </table>
    </div>
  )
}

export default StudentTimeTable

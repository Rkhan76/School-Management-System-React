import React from 'react'

function StudentTimeTable() {
    const studentClassSchedule = {
      Monday: {
        'Period-1': 'History',
        'Period-2': 'Math',
        'Period-3': 'English',
        'Period-4': 'Science',
        'Lunch Break': 'Lunch',
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
        'Lunch Break': 'Lunch',
        'Period-5': 'Physical Education',
        'Period-6': 'Computer Science',
        'Period-7': 'Music',
        'Period-8': 'Art',
      },
      
    }

    const dayWiseTime = Object.keys(studentClassSchedule).map((day)=>{
        const array = time[day]
        console.log(typeof day)
        console.log(day)
        return (
          <tr key={day}>
            <td>{array.Period-1}</td>
          </tr>
        )
    })
        
    

  

  return (
    <div>
      <table>
        <tr>
          <th rowSpan={9}>Time Table</th>
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
        <tr>
            <td>Monday</td>
            <td>histor</td>
        </tr>
      </table>
    </div>
  )
}

export default StudentTimeTable

import { useState, useEffect } from 'react'
import { handleGetStudentAttendance } from '../../../fetching/fetch'

function StudentAttendance() {
  const [totalPresent, setTotalPresent] = useState(0)
  const [totalAbsent, setTotalAbsent] = useState(0)

  const [selectedSession, setSelectedSession] = useState(null)
  const [attendance, setAttendance] = useState(null)
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const sessionArray = [2000, 2001, 2002, 2024]

  const sessions = sessionArray.map((session) => (
    <option value={session} key={session}>
      {session}
    </option>
  ))

  const handleSessionSelect = async (e) => {
    const selectedSession = e.target.value
    setSelectedSession(selectedSession)
  }

  useEffect(() => {
    const fetchData = async () => {
      if (selectedSession) {
        console.log(selectedSession)
        try {
          const response = await handleGetStudentAttendance(selectedSession)
          console.log(response)
          console.log(typeof response)
          setAttendance(response)
        } catch (error) {
          console.error('Error fetching class data:', error)
        }
      }
    }
    fetchData()
  }, [selectedSession])

  const date = Array.from({ length: 31 }, (_, index) => (
    <th key={index + 1}>{index + 1}</th>
  ))

  const monthAttendance = attendance ? Object.entries(attendance).map(([month, monthAttendance]) => {
        let presentCount = 0
        let absentCount = 0

        const days = monthAttendance.map((day, index) => {
          if (day === true) {
            presentCount++
            return <td key={index}>P</td>
          } else if(day === false) {
            absentCount++
            return <td key={index}>A</td>
          } else {
            return <td>-</td>
          }
        })

        return (
          <tr key={month}>
            <td>{months[month - 1]}</td>
            {days}
            <td>{presentCount}</td>
            <td>{absentCount}</td>
          </tr>
        )
      })
    : null

  return (
    <div>
      <div className="m-10 bg-gray-400 rounded-md">
        <h1 className="p-5 text-3xl">Student Attendance</h1>
        <div className="p-4">
          <label className="p-4 text-lg" htmlFor="Session">
            Select Session
          </label>
          <select
            onChange={handleSessionSelect}
            className="p-2 w-60 rounded-sm outline-none"
          >
            <option value="Select Session">Select Session</option>
            {sessions}
          </select>
        </div>
      </div>
      <table className="attendance-table m-10">
        <thead>
          <tr>
            <th>Month</th>
            {date}
            <th>Total Present</th>
            <th>Total Absent</th>
          </tr>
        </thead>
        <tbody>{monthAttendance}</tbody>
      </table>
    </div>
  )
}

export default StudentAttendance

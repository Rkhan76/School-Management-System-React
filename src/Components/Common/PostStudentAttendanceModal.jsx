import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

const PostStudentAttendanceModal = ({ status, initialValue, onClose }) => {
  const [open, setOpen] = React.useState(status)
  console.log('on modal content page :', initialValue)
  const { name } = initialValue
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

  const handleClose = () => {
    setOpen(false)
    onClose()
  }

  const date = Array.from({ length: 31 }, (_, index) => (
    <th key={index + 1}>{index + 1}</th>
  ))

  //   const monthAttendance = studentAttendance
  //     ? Object.entries(studentAttendance).map(([month, monthAttendance]) => {
  //         let presentCount = 0
  //         let absentCount = 0

  //         const days = monthAttendance.map((day, index) => {
  //           if (day === true) {
  //             presentCount++
  //             return <td key={index}>P</td>
  //           } else if (day === false) {
  //             absentCount++
  //             return <td key={index}>A</td>
  //           } else {
  //             return <td>-</td>
  //           }
  //         })

  //         return (
  //           <tr key={month}>
  //             <td>{months[month - 1]}</td>
  //             {days}
  //             <td>{presentCount}</td>
  //             <td>{absentCount}</td>
  //           </tr>
  //         )
  //       })
  //     : null

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-black shadow-md p-4 inline-block min-w-min max-w-full">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <table className="attendance-table m-10">
            <thead>
              <tr>
                <th>Month</th>
                {date}
                <th>Total Present</th>
                <th>Total Absent</th>
              </tr>
            </thead>
            {/* <tbody>{monthAttendance}</tbody> */}
          </table>

          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </div>
  )
}

export default PostStudentAttendanceModal

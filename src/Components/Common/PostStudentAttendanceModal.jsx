import {useState} from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

const PostStudentAttendanceModal = ({ status, initialValue, onClose }) => {
  const [open, setOpen] = useState(status)
  const [attnd,setAttnd] = useState()
  console.log('on modal content page :', initialValue)

  const { name, email, className } = initialValue
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

 const handleSubmit = (e) => {
   e.preventDefault()
   console.log('Form submitted')
   console.log('Attendance data:', attnd) // Log the attendance data
 }


  const date = Array.from({ length: 31 }, (_, index) => (
    <th key={index + 1}>{index + 1}</th>
  ))

 const attd = months.map((month, index)=>{
    const days = Array.from({ length: 31 }, (_, index) => (
      <td key={index + 1} ><input type='checkbox'/></td>
    ))
    return (
            <tr key={month}>
              <td>{months[index]}</td>
              {days}
              {/* <td>{presentCount}</td>
              <td>{absentCount}</td> */}
            </tr>
          )
 })



 

 


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

          <Button>Update</Button>

          <form className="flex flex-wrap" onSubmit={handleSubmit}>
            <table className="attendance-table m-10">
              <thead>
                <tr>
                  <th>Month</th>
                  {date}
                  <th>Total Present</th>
                  <th>Total Absent</th>
                </tr>
              </thead>
              <tbody>{attd}</tbody>
            </table>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Update
            </button>
          </form>

          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </div>
  )
}

export default PostStudentAttendanceModal

import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

const ViewStudentResultModal = ({ status, initialValue, onClose }) => {
  const [open, setOpen] = React.useState(status)
  const { name, studentResultData } = initialValue
  const results = studentResultData.result[0].result

  const handleClose = () => {
    setOpen(false)
    onClose()
  }

  // Calculate total internal and external marks
  let totalInternalMarks = 0
  let totalExternalMarks = 0
  results.forEach((result) => {
    totalInternalMarks += result.internalMarks
    totalExternalMarks += result.externalMarks
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
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  S.N
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subject Code
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subject
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mid Terms (Marks/Total)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Final Term (Marks/Total)
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {results.map((result, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {result.subjectCode}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {result.subjectName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {result.internalMarks}/{result.totalInternalMarks}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {result.externalMarks}/{result.totalExternalMarks}
                  </td>
                </tr>
              ))}
              <tr className="bg-gray-50">
                <td
                  colSpan={3}
                  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                >
                  Total
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {totalInternalMarks}/{results.length * 100}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {totalExternalMarks}/{results.length * 100}
                </td>
              </tr>
            </tbody>
          </table>
          <Button onClick={handleClose} className="mt-4">
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  )
}

export default ViewStudentResultModal

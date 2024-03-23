import * as React from 'react'
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import viewIcon from '../../assets/viewIcon.png'
import editIcon from '../../assets/editIcon.png'
import ViewStudentResultModal from '../Common/ViewStudentResultModal'
import { handleAssignmentPost, handleGetAssignment } from '../../fetching/fetch'

const AssignmentPost = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    deadline: '',
    subject: '',
    className: '',
    assignmentCode: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await handleAssignmentPost(formData)
      console.log(res)
      alert('Assignment assigned successfully') // Show success alert
      setFormData({
        // Clear form input details after submission
        title: '',
        description: '',
        deadline: '',
        subject: '',
        className: '',
        assignmentCode: '',
      })
    } catch (error) {
      console.error('Error posting assignment:', error)
    }
  }

  const generateAssignmentCode = () => {
    const { subject, className, description } = formData
    const currentDate = new Date().toISOString().slice(0, 10) // Get current date
    const assignmentCode = `${subject.toUpperCase().substring(0, 3)}-${className
      .toUpperCase()
      .substring(0, 3)}-${currentDate}`
    setFormData({
      ...formData,
      assignmentCode: assignmentCode,
    })
  }

  // View Assignment
  const [selectedSession, setSelectedSession] = useState('')
  const [assignments, setAssignments] = useState([])
  const [selectedStudent, setSelectedStudent] = useState(null)
  const yearArray = [2000, 2011, 2019, 2024]

  const years = yearArray.map((year) => (
    <option value={year} key={year}>
      {year}
    </option>
  ))

  const handleYearSelect = async (e) => {
    const selectedYear = e.target.value
    setSelectedSession(selectedYear)
  }

  useEffect(() => {
    
     const fetchData = async () => {
       if (selectedSession) {
         try {
           const response = await handleGetAssignment(selectedSession)
           const assignmentData = response.map((assignment, index) => ({
             ...assignment,
             id: index + 1, // Add 1 to avoid zero-based indexing
           }))
           setAssignments(assignmentData)
         } catch (error) {
           console.error('Error fetching assignment data:', error)
         }
       }
     }
     fetchData()
  }, [selectedSession])

  const displayViewAssignment = (params) => {
  console.log('Params :', params)
  // handleGetStudentResult(null, params.email)
  //   .then((studentResultData) => {
  //     // console.log(studentResultData.result[0].result)
  //     const studentDetail = {
  //       name: params.firstName + ' ' + params.lastName,
  //       studentClass: 7,
  //       studentResultData: studentResultData,
  //     }

  //     setSelectedStudent(
  //       <ViewStudentResultModal
  //         status={true}
  //         initialValue={studentDetail}
  //         onClose={() => setSelectedStudent(null)}
  //       />
  //     )
  //   })
  //   .catch((error) => {
  //     console.log('getting error in fetching student attendance detail', error)
  //   })
}

  const columns = [
    { field: 'className', headerName: 'Class', width: 90 },
    {
      field: 'subject',
      headerName: 'Subject',
      width: 150,
      editable: false,
    },
    {
      field: 'title',
      headerName: 'Title',
      width: 150,
      editable: false,
    },
    {
      field: 'assignmentCode',
      headerName: 'Assignment-Code',
      width: 150,
      editable: false,
    },
    {
      field: 'deadline',
      headerName: 'Deadline',
      width: 250,
      editable: false,
    },
    {
      field: 'submissionStatus',
      headerName: 'Submission Status',
      width: 150,
      renderCell: (params) => (
          <img
            src={viewIcon}
            onClick={() => displayViewAssignment(params.row)}
            alt="view Icon"
            style={{ width: 24, height: 24, cursor: 'pointer' }}
          />
         
      ),
    },
  ]

  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          {' '}
          {/* Assigning 4 parts to the form */}
          <div className="max-w-md mx-auto">
            <h2 className="text-lg font-semibold mb-4">Assign an Assignment</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="title" className="block">
                  Title:
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="description" className="block">
                  Description:
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full h-32"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block">
                  Subject:
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="className" className="block">
                  Class Name:
                </label>
                <input
                  type="text"
                  id="className"
                  name="className"
                  value={formData.className}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="deadline" className="block">
                  Deadline:
                </label>
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                />
              </div>
              <div>
                <label htmlFor="assignmentCode" className="block">
                  Assignment Code:
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="assignmentCode"
                    name="assignmentCode"
                    value={formData.assignmentCode}
                    readOnly // Making input box read-only
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                    required
                  />
                  <button
                    type="button"
                    onClick={generateAssignmentCode}
                    className="ml-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  >
                    Generate
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Assign Assignment
              </button>
            </form>
          </div>
        </div>
        <div className="col-span-8">
          <div className="m-10 bg-gray-400 rounded-md">
            <h1 className="p-5 text-3xl">Assignment</h1>
            <div className="p-4">
              <label className="p-4 text-lg" htmlFor="Session">
                Select Class
              </label>
              <select
                className="p-2 w-60 rounded-sm outline-none"
                onChange={handleYearSelect}
              >
                <option value="">Select Session</option>
                {years}
              </select>
            </div>
          </div>
          <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={assignments}
              columns={columns}
              pageSize={5}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </Box>
          {selectedStudent}
        </div>
      </div>
    </>
  )
}

export default AssignmentPost

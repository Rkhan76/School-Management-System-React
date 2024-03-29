import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  handleGetStudentProfile,
  handleGetAssignmentByStudent,
} from '../../fetching/fetch'

const StudentAssignment = () => {
  const [studentClass, setStudentClass] = useState('')
  const [assignments, setAssignments] = useState([])
  const [selectedFile, setSelectedFile] = useState(null)
  const [formData, setFormData] = useState({
    file: '',
    assignmentCode: '',
  })

  useEffect(() => {
    const fetchStudentProfile = () => {
      handleGetStudentProfile()
        .then((response) => {
          setStudentClass(response.profile.studentClass)
        })
        .catch((error) => {
          console.log('Error in fetching student profile:', error)
        })
    }

    fetchStudentProfile()
  }, [])

  useEffect(() => {
    const fetchAssignments = () => {
      if (studentClass) {
        handleGetAssignmentByStudent(studentClass)
          .then((assignmentData) => {
            if (assignmentData.length > 0) {
              setAssignments(assignmentData)
            } else {
              setAssignments([])
            }
          })
          .catch((error) => {
            console.log('Error in fetching assignments:', error)
          })
      }
    }

    fetchAssignments()
  }, [studentClass])

  const handleSubmit = async (event) => {
    event.preventDefault()
   const assignmentCodeValue = event.target.elements.assignmentCode.value
   console.log('Assignment code value:', assignmentCodeValue)
   setFormData({
     ...formData,
     assignmentCode: assignmentCodeValue,
   })
 
      try {
        console.log('form data content:', formData)
        const res = await handlePostAssignmentByStudent(formData)
        console.log(res)
      } catch (error) {
        console.log('Error submitting assignment:', error)
      }
    
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setSelectedFile(file)
    setFormData({
      ...formData,
      file: file,
    })
  }


  return (
    <div className="container mx-auto py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {assignments.map((assignment, index) => (
          <form onSubmit={handleSubmit} key={index}>
            <div className="p-4 bg-gray-100 shadow-md rounded-md">
              <h1 className="text-xl font-bold mb-2">{assignment.subject}</h1>
              <p>
                <span className="font-semibold">Deadline:</span>{' '}
                {assignment.deadline}
              </p>
              <p>
                <span className="font-semibold">Code:</span>{' '}
                {assignment.assignmentCode}
              </p>
              <p>
                <span className="font-semibold">Title:</span> {assignment.title}
              </p>
              <p>
                <span className="font-semibold">Description:</span>{' '}
                {assignment.description}
              </p>
              <label htmlFor="assignmentCode">Assignment Code:</label>
              <input
                type="text"
                name='assignmentCode'
                value={assignment.assignmentCode}
                className="mt-4"
                readOnly
              />
              <input
                type="file"
                onChange={handleFileChange}
                accept=".pdf"
                className="mt-4"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Submit Assignment
            </button>
          </form>
        ))}
      </div>
    </div>
  )
}

export default StudentAssignment

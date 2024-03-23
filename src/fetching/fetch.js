import { Getcretendials } from "../Auth/auth"
import axios from 'axios'

const { token, email } = Getcretendials()



export async function handleGetStudentProfile() {
  const { token, email } = Getcretendials()
  console.log("here on handleGetStudentProfile :", email)
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Email: email,
    },
  }

  try {
    const response = await axios.get(
      'http://localhost:8000/profile/student',
      config
    )
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error('Error fetching student profile:', error)
    throw error 
  }
}

export async function handleUpdateStudentProfile(studentUpdatedData) {

  console.log(email)
  console.log(studentUpdatedData)
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Email: email,
    },
    
  }

  try {
    const response = await axios.post(
      'http://localhost:8000/profile/student', studentUpdatedData, config
    )

    return response
  } catch (error) {
    console.error('Error fetching student profile:', error)
    throw error 
  }
}


export async function handleGetClassData(selectedClass) {
  // console.log("selected class :", selectedClass)
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Email: email,
      selectedClass
    },
  }
  try{
    const response = await axios.get("http://localhost:8000/profile/class",config)
    console.log(response.data.classData)
    return response.data.classData
  }catch(error){
    console.log("error in fetching classData : ", error)
  }
 
}

export async function handleGetStudentAttendance(selectedSession, studentEmail) {
  console.log('checking selectedSession', selectedSession)
  const { token, email } = Getcretendials()

  // If selectedSession is falsy (null or undefined), set it to the current year
  if (!selectedSession) {
    selectedSession = new Date().getFullYear() // Use new Date().getFullYear() instead of Date.now().getFullYear()
    console.log('session not selected : ', selectedSession)
  }

  if (!studentEmail) {
    studentEmail = email
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Email: email,
      year: selectedSession,
      studentEmail: studentEmail,
    },
  }



  try {
    const response = await axios.get(
      'http://localhost:8000/attendance/student',
      config
    )

    console.log("On fetch page :",response.data.attendance[0].attendance)
    return response.data.attendance[0].attendance
  } catch (error) {
    console.log('error in fetching student Attendance : ', error)
  }
}


export async function handlePostStudentAttendance(
  selectedSession,
  studentEmail
) {
  console.log('checking selectedSession', selectedSession)
  const { token, email } = Getcretendials()

  // If selectedSession is falsy (null or undefined), set it to the current year
  if (!selectedSession) {
    selectedSession = new Date().getFullYear() // Use new Date().getFullYear() instead of Date.now().getFullYear()
    console.log('session not selected : ', selectedSession)
  }

  if (!studentEmail) {
    studentEmail = email
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Email: email,
      year: selectedSession,
      studentEmail: studentEmail,
    },
  }

  try {
    // const response = await axios.get(
    //   'http://localhost:8000/attendance/student',
    //   config
    // )

    console.log('On fetch page :', response.data.attendance[0].attendance)
    return response.data.attendance[0].attendance
  } catch (error) {
    console.log('error in fetching student Attendance : ', error)
  }
}


export async function handleGetStudentResult(
  selectedSession,
  studentEmail
) {
  console.log('checking selectedSession', selectedSession)
  const { token, email } = Getcretendials()

  // If selectedSession is falsy (null or undefined), set it to the current year
  if (!selectedSession) {
    selectedSession = new Date().getFullYear() // Use new Date().getFullYear() instead of Date.now().getFullYear()
    console.log('session not selected : ', selectedSession)
  }

  if (!studentEmail) {
    studentEmail = email
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Email: email,
      year: selectedSession,
      studentEmail: studentEmail,
    },
  }

  try {
    const response = await axios.get(
      'http://localhost:8000/result',
      config
    )

    console.log('On fetch page :', response.data.result[0].result)
    return response.data
  } catch (error) {
    console.log('error in fetching student Attendance : ', error)
  }
}

export async function handlePostStudentResult(
  selectedSession,
  studentEmail,
  studentClass,
  studentResultForm
) {
  console.log(studentResultForm)
  const { result } = studentResultForm
  const { token, email } = Getcretendials()

  if (!selectedSession) {
    selectedSession = new Date().getFullYear()
  }

  if (!studentEmail) {
    studentEmail = email
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }

  const data = {
    email: studentEmail,
    studentClass,
    result,
    year: selectedSession,
  }

  try {
    const response = await axios.post(
      'http://localhost:8000/result',
      data,
      config
    )
    console.log(response)
    return response
  } catch (error) {
    console.log('Error submitting form data:', error)
    throw error
  }
}

export async function handleAssignmentPost(
  assignmentForm
) {
 
  const { token, email } = Getcretendials()
  const selectedSession = new Date().getFullYear()
  const teacherEmail = email

  
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }

  const data = {
    ...assignmentForm,
    teacherEmail,
    year: selectedSession
  }

  try {
    const response = await axios.post(
      'http://localhost:8000/assignment',
      data,
      config
    )
    console.log(response.data)
    return response.data.message
  } catch (error) {
    console.log('Error submitting form data:', error)
    throw error
  }
}

export async function handleGetAssignment(selectedSession) {
  console.log('checking selectedSession', selectedSession)
  const { token, email } = Getcretendials()

  // If selectedSession is falsy (null or undefined), set it to the current year
  if (!selectedSession) {
    selectedSession = new Date().getFullYear() // Use new Date().getFullYear() instead of Date.now().getFullYear()
    console.log('session not selected : ', selectedSession)
  }

  
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Email: email,
      year: selectedSession,
    },
  }

  try {
    const response = await axios.get('http://localhost:8000/assignment', config)

    console.log('On fetch page :', response.data.assignments)
    return response.data.assignments
  } catch (error) {
    console.log('error in fetching student Attendance : ', error)
  }
}








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








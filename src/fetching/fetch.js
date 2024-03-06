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
  try{
    const classData = await axios("")
  }
}




import { Getcretendials } from "../Auth/auth"
import axios from 'axios'

const { token, email } = Getcretendials()



export async function handleGetStudentProfile() {
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
    throw error // You can handle the error further if needed
  }
}

export async function handleUpdateStudentProfile(studentUpdatedData) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Email: email,
    },
    studentUpdatedData
  }

  try {
    const response = await axios.post(
      'http://localhost:8000/profile/student',
      config
    )
    console.log(response)
    return response
  } catch (error) {
    console.error('Error fetching student profile:', error)
    throw error 
  }
}


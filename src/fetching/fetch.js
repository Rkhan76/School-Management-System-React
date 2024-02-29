import { Getcretendials } from "../Auth/auth"

const { token, email } = Getcretendials()

export async function studentProfileInfoLoader(){
  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Email: email,
    },
  }

  const response = await fetch(
    'http://localhost:8000/profile/student',
    requestOptions
  )
  console.log(response)
  return response.json()
}

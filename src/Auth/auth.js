export function setCretendials(role, email, token, studentClass) {
  if(studentClass){
    localStorage.setItem('studentClass', JSON.stringify(studentClass))
  }
  localStorage.setItem('token', JSON.stringify(token))
  localStorage.setItem('role', JSON.stringify(role))
  localStorage.setItem('email', JSON.stringify(email))
  
}

export function Getcretendials() {
  const role = JSON.parse(localStorage.getItem('role'))
  const token = JSON.parse(localStorage.getItem('token'))
  const email = JSON.parse(localStorage.getItem('email'))
  const studentClass = JSON.parse(localStorage.getItem('studentClass'))
  return { role, token, email,studentClass }
}

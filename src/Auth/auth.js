export function setCretendials(role, email, token) {
  localStorage.setItem('token', JSON.stringify(token))
  localStorage.setItem('role', JSON.stringify(role))
  localStorage.setItem('email', JSON.stringify(email))
}

export function Getcretendials() {
  const role = JSON.parse(localStorage.getItem('role'))
  const token = JSON.parse(localStorage.getItem('token'))
  const email = JSON.parse(localStorage.getItem('email'))
  return { role, token, email }
}

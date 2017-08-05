const API_URL = process.env.REACT_APP_RAILS_API_URL

const signup = (data) => {
  return fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(user => user)
}

const refresh = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  return fetch(`${API_URL}/auth/refresh`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })
    .then(res => res.json())
    .then(user => user)
}

export default {
  signup,
  refresh
}
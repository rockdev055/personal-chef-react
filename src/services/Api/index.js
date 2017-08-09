import fetch from 'isomorphic-fetch'

const API_URL = process.env.REACT_APP_RAILS_API_URL

const headers = () => {

  const token = JSON.parse(localStorage.getItem('token'))

  return {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  }
}

export default {

  get(url) {
    return fetch(`${API_URL}${url}`, {
      method: 'GET',
      headers: headers()
    })
      .then(res => res.json())
      .then(data => data)
  },

  post(url, data) {
    const body = JSON.stringify(data)

    return fetch(`${API_URL}${url}`, {
      method: 'POST',
      headers: headers(),
      body
    })
      .then(res => res.json())
      .then(data => data)
  }
}
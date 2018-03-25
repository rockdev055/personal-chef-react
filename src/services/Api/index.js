import fetch from 'isomorphic-fetch'

const hostname = window && window.location && window.location.hostname

const API_URL =
  hostname === 'localhost' ? process.env.REACT_APP_RAILS_API_DEV_URL : process.env.REACT_APP_RAILS_API_PROD_URL

const headers = () => {
  const token = JSON.parse(localStorage.getItem('token'))

  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
    'Access-Control-Allow-Origin': '*',
  }
}

export default {
  get(url) {
    return fetch(`${API_URL}${url}`, {
      method: 'GET',
      headers: headers(),
    })
      .then(res => res.json())
      .then(data => data)
  },

  post(url, data = {}) {
    const body = JSON.stringify(data)

    return fetch(`${API_URL}${url}`, {
      method: 'POST',
      headers: headers(),
      body,
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText)
        }
        return res.json()
      })
      .then(data => data)
  },
}

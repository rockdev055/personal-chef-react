const API_URL = process.env.REACT_APP_RAILS_API_URL
console.log(API_URL)

const fetchHouseholds = () => {
  return fetch(`${API_URL}/households`).then(res => res.json())
}

const fetchHousehold = (id) => {
  return fetch(`${API_URL}/households/${id}`).then(res => res.json())
}

export default {
  fetchHouseholds,
  fetchHousehold
}

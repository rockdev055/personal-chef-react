import ApiService from '../../../services/Api'

const addHousehold = (household) => {
  return {
    type: 'ADD_HOUSEHOLD_SUCCESS',
    household
  }
}

export const convertLead = (id, history) => {
  return dispatch => {
    return ApiService.post(`/households/${id}/convert`)
      .then(client => {
        console.log(client)
        dispatch(convertLeadComplete(client))
        history.push(`/households/${client.id}`)
      })
  }
}

const fetchHouseholdsComplete = households => {
  return {
    type: 'FETCH_HOUSEHOLDS_SUCCESS',
    households
  }
}

const convertLeadComplete = (client) => {
  return {
    type: 'CONVERT_LEAD_COMPLETE',
    client
  }
}

export const createHousehold = (household, history) => {
  return dispatch => {
    return ApiService.post(`/households`, household)
      .then(data => {
        dispatch(addHousehold(data))
        history.replace('/leads')
      })
  }
}

export const fetchHouseholds = () => {
  return dispatch => {
    return ApiService.get(`/households`)
      .then(data => {
        dispatch(fetchHouseholdsComplete(data))
      })

  }
}
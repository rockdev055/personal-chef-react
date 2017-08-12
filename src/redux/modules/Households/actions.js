import ApiService from '../../../services/Api'

const addHousehold = (household) => {
  return {
    type: 'ADD_HOUSEHOLD_SUCCESS',
    household
  }
}

const fetchHouseholdsComplete = households => {
  return {
    type: 'FETCH_HOUSEHOLDS_SUCCESS',
    households
  }
}

export const createHousehold = (household, history) => {
  return dispatch => {
    return ApiService.post(`/households`, household)
      .then(data => {
        dispatch(addHousehold(data))
        history.replace('/households')
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
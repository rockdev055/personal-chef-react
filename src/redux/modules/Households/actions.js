import ApiService from '../../../services/Api'
import { fetchMealsComplete } from '../Meals/actions'

const addHousehold = household => {
  return {
    type: 'ADD_HOUSEHOLD_SUCCESS',
    household,
  }
}

export const convertLead = (id, monthlyRate, history) => {
  return dispatch => {
    return ApiService.post(
      `/households/${id}/convert`,
      monthlyRate
    ).then(client => {
      dispatch(convertLeadComplete(client))
      history.push(`/households/clients/${client.id}`)
    })
  }
}

export const fetchHouseholdsComplete = households => {
  return {
    type: 'FETCH_HOUSEHOLDS_SUCCESS',
    households,
  }
}

const convertLeadComplete = client => {
  return {
    type: 'CONVERT_LEAD_COMPLETE',
    client,
  }
}

export const createHousehold = (household, history) => {
  return dispatch => {
    return ApiService.post(`/households`, household).then(data => {
      dispatch(addHousehold(data))
      history.replace('/households/leads')
    })
  }
}

export const fetchMealsAndHouseholds = () => {
  return dispatch => {
    dispatch({ type: 'APP_LOADING' })
    return Promise.all([
      ApiService.get('/meals'),
      ApiService.get('/households'),
    ]).then(([meals, households]) => {
      dispatch(fetchMealsComplete(meals))
      dispatch(fetchHouseholdsComplete(households))
      dispatch({ type: 'APP_LOADING_COMPLETE' })
    })
  }
}

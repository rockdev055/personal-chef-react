import ApiService from '../../../services/Api'
import { reset } from 'redux-form'
import { fetchHouseholdsComplete } from '../Households/actions'
import { fetchMealsComplete } from '../Meals/actions'

export const authenticating = () => ({type: 'AUTHENTICATING'})

export const setUser = (user) => ({type: 'AUTH_COMPLETE', user})

export const authenticationFailure = (errors) => ({type: 'AUTH_FAILURE', errors})

export const logout = (router) => {
  localStorage.removeItem('token')
  return { type: 'LOGOUT' }
}

export const apiCall = () => {
  return dispatch => {
    dispatch({
      type: 'APP_LOADING'
    })

    const householdProm = ApiService.get(`/households`)

    const mealProm = ApiService.get(`/meals`)

    Promise.all([householdProm, mealProm])  
      .then(values => {
        dispatch(fetchHouseholdsComplete(values[0]))
        dispatch(fetchMealsComplete(values[1]))
        dispatch({type: 'APP_LOADING_COMPLETE'})
        console.log(values)})  
  }
}

export const authenticate = () => {
  return dispatch => {
    dispatch(authenticating())
    return ApiService.post(`/auth/refresh`)
      .then(currentUser => {
        const { user, token } = currentUser
        localStorage.setItem('token', JSON.stringify(token))
        dispatch(setUser(user))
      })
  }
}

export const signup = (data, history) => {
  return dispatch => {
    dispatch(authenticating())
    ApiService.post('/users', data)
      .then(currentUser => {
        const { user, token } = currentUser
        localStorage.setItem('token', JSON.stringify(token))
        dispatch(setUser(user))
        dispatch(reset('signup'))
        history.replace('/households')
      })
  }
}

export const login = (params, history) => {
  return dispatch => {
    dispatch(authenticating())
    ApiService.post('/auth', params)
      .then(currentUser => {
        const { user, token } = currentUser
        localStorage.setItem('token', JSON.stringify(token))
        dispatch(setUser(user))
        dispatch(reset('login'))
        history.replace('/households')
      })
  }
}
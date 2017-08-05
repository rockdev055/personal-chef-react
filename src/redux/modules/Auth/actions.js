import ApiService from '../../../services/ApiService'
import { reset } from 'redux-form'

export const authenticating = () => ({type: 'AUTHENTICATING'})

export const setUser = (user) => ({type: 'AUTH_COMPLETE', user})

export const signup = (data, history) => {
  return dispatch => {
    dispatch(authenticating())
    ApiService.signup(data)
      .then(currentUser => {
        const { user, token } = currentUser
        localStorage.setItem('token', token)
        dispatch(setUser(user))
        dispatch(reset('signup'))
        history.replace('/households')
      })
  }
}
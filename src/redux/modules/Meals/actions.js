import ApiService from '../../../services/Api'

const addMeal = (meal) => {
  return {
    type: 'ADD_MEAL_SUCCESS',
    meal
  }
}

export const createMeal = (meal, history) => {
  return dispatch => {
    return ApiService.post('/meals', meal)
      .then(meal => {
        dispatch(addMeal(meal))
        history.replace('/households')
      })
  }
}
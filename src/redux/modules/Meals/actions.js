import ApiService from '../../../services/Api'

const addMeal = meal => {
  return {
    type: 'ADD_MEAL_SUCCESS',
    meal,
  }
}

export const fetchMealsComplete = meals => {
  return {
    type: 'FETCH_MEALS_SUCCESS',
    meals,
  }
}

export const createMeal = (meal, history) => {
  return dispatch => {
    return ApiService.post('/meals', meal).then(meal => {
      dispatch(addMeal(meal))
      history.replace('/households')
    })
  }
}

export const fetchMeals = () => {
  return dispatch => {
    return ApiService.get('/meals').then(meals => {
      dispatch(fetchMealsComplete(meals))
    })
  }
}

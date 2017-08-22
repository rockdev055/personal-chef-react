import ApiService from '../../../services/Api'

const addMealToHousehold = (mealId, householdId) => {
  return {
    type: 'ADD_MEAL_TO_HOUSEHOLD',
    mealId, 
    householdId
  }
}

export const createHouseholdMeal = (mealId, householdId) => {
  return dispatch => {
    return ApiService.post(`/households/${householdId}/meals/${mealId}/household_meals`)
      .then(mealId => dispatch(addMealToHousehold(mealId, householdId)))
  }
}
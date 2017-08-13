export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_MEAL_SUCCESS': {
      return [...state, action.meal]
    }
    case 'FETCH_MEALS_SUCCESS': {
      return action.meals
    }
    default: {
      return state
    }
  }
}
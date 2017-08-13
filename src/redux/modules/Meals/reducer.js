export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_MEAL_SUCCESS': {
      return [...state, action.meal]
    }
    default: {
      return state
    }
  }
}
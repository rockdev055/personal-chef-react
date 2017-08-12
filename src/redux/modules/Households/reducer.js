export default (state = [], action) => {
  switch(action.type) {
    case 'FETCH_HOUSEHOLDS_SUCCESS': {
      return action.households
    }
    case 'ADD_HOUSEHOLD_SUCCESS': {
      return [...state, action.household]
    }
    default: {
      return state
    }
  }
}
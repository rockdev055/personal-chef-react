export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_MEMBERS_SUCCESS': {
      return action.members
    }
    default: {
      return state
    }
  }
}
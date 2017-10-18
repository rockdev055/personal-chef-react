export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_MEMBERS_SUCCESS': {
      return action.members
    }
    case 'CREATE_MEMBER_SUCCESS': {
      return state.concat(action.member)
    }
    default: {
      return state
    }
  }
}
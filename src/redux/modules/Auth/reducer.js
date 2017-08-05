const initialState = {
  isAuthenticated: false,
  isAuthenticating: false,
  currentUser: {}
}

export default (state=initialState, action) => {
  switch(action.type) {
    case 'AUTHENTICATING': {
      return {
        ...state,
        isAuthenticating: true
      }
    }
    default: {
      return state
    }
  }
}
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
    case 'AUTH_COMPLETE': {
      return {
        ...state,
        currentUser: action.user,
        isAuthenticated: true,
        isAuthenticating: false
      }
    }
    default: {
      return state
    }
  }
}
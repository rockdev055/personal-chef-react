const initialState = {
  isAuthenticated: false,
  isAuthenticating: false,
  currentUser: {},
  loading: true
}

export default (state = initialState, action) => {
  switch (action.type) {
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
        isAuthenticating: false,
        loading: false,
      }
    }
    case 'AUTH_FAILURE': {
      return {
        ...state,
        loading: false
      }
    }
    case 'LOGOUT': {
      return {
        ...state,
        isAuthenticated: false,
        currentUser: {}
      }
    }
    case 'APP_LOADING': {
      return {
        ...state,
        loading: true
      }
    }
    case 'APP_LOADING_COMPLETE': {
      return {
        ...state,
        loading: false
      }
    }
    default: {
      return state
    }
  }
}
const initialState = {
  isAuthenticated: false,
  isAuthenticating: false,
  currentUser: {}
}

export default (state=initialState, action) => {
  switch(action.type) {
    default: {
      return state
    }
  }
}
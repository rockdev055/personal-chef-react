export const signup = (data) => {
  console.log(data)
  return dispatch => {
    dispatch({
      type: 'SIGN_UP'
    })
  }
}
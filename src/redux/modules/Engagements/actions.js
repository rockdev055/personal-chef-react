import ApiService from '../../../services/Api'

export const createEngagement = (householdId, date) => {
  return dispatch => {
    return ApiService.post(`/households/${householdId}/engagements`, {
      engagement: { date: date }
    }).then(engagement => console.log(engagement))
    dispatch({})
  }
}

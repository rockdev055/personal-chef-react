import ApiService from "../../../services/Api"

const addEngagementToHousehold = engagement => {
  return {
    type: "CREATE_ENGAGEMENT_SUCCESS",
    engagement
  }
}

export const createEngagement = (householdId, date) => {
  return dispatch => {
    return ApiService.post(`/households/${householdId}/engagements`, {
      engagement: { date: date }
    }).then(engagement => dispatch(addEngagementToHousehold(engagement)))
    dispatch({})
  }
}

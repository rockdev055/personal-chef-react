import ApiService from "../../../services/Api"

const addEngagementToHousehold = engagement => {
  return {
    type: "CREATE_ENGAGEMENT_SUCCESS",
    engagement
  }
}

const addMealToEngagement = (engagementId, mealId, householdId) => {
  return {
    type: "ADD_MEAL_TO_ENGAGEMENT",
    mealId,
    engagementId,
    householdId
  }
}

export const createEngagementMeal = (engagementId, mealId, householdId) => {
  return dispatch => {
    return ApiService.post(
      `/engagements/${engagementId}/meals/${mealId}/engagement_meals`
    ).then(mealId =>
      dispatch(addMealToEngagement(engagementId, mealId, householdId))
    )
  }
}

export const createEngagement = (householdId, date) => {
  return dispatch => {
    return ApiService.post(`/households/${householdId}/engagements`, {
      engagement: { date: date }
    }).then(engagement => dispatch(addEngagementToHousehold(engagement)))
  }
}

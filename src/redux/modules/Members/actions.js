import { reset } from 'redux-form'
import ApiService from '../../../services/Api'

const fetchMembersSuccess = (members) => {
  return {
    type: 'FETCH_MEMBERS_SUCCESS',
    members
  }
}

export const fetchMembers = () => {
  return dispatch => {
    return ApiService.get(`/members`)
      .then(members => dispatch(fetchMembersSuccess(members)))
  }
}

export const createHouseholdMember = (member, id) => {
  return dispatch => {
    return ApiService.post(`/households/${id}/members`, member)
      .then(member => {
        dispatch({
          type: 'CREATE_MEMBER_SUCCESS',
          member
        })
        dispatch(reset('newHouseholdMember'))
      })
  }
}
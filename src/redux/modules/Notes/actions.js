import ApiService from "../../../services/Api"
import { reset } from "redux-form"

const createNoteSuccess = household => {
  return {
    type: "CREATE_NOTE_SUCCESS",
    household
  }
}

export const createNote = (id, note) => {
  return dispatch => {
    return ApiService.post(`/households/${id}/notes`, note).then(household => {
      dispatch(createNoteSuccess(household))
      dispatch(reset("newNote"))
    })
  }
}

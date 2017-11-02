import ApiService from '../../../services/Api'
import { reset } from 'redux-form'

const createNoteSuccess = note => {
  return {
    type: 'CREATE_NOTE_SUCCESS',
    note
  }
}

export const createNote = (id, note) => {
  return dispatch => {
    return ApiService.post(`/households/${id}/notes`, note).then(note => {
      dispatch(createNoteSuccess(note))
      dispatch(reset('newNote'))
    })
  }
}

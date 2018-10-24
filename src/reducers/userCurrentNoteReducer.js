import {
  CHANGE_USER_CURRENT_NOTE,
} from '../actions/userCurrentNoteActions'

const initialState = ''

const userCurrentNote = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_USER_CURRENT_NOTE:
        return action.payload.userCurrentNote
      default:
        return state
    }
  }
  
export default userCurrentNote
import {
  CHANGE_USER_ID,
} from '../actions/userIdActions'

const initialState = 0

const userId = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER_ID:
      return action.payload.userId
    default:
      return state
  }
}

export default userId
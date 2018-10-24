import { combineReducers } from 'redux'
import todos from './todosReducer'
import userId from './userIdReducer'
import userCurrentNote from './userCurrentNoteReducer'

export default combineReducers({
    todos,
    userId,
    userCurrentNote
})

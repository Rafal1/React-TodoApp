import { combineReducers } from 'redux'
import todos from './todosReducer'
import userId from './userIdReducer'

export default combineReducers({
    todos,
    userId
})

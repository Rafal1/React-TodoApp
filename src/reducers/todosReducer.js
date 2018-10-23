import {
  FETCH_TODOS_BEGIN,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE
} from './../actions/todosActions'

const initialState = {
  items: [],
  loading: false,
  error: null
};

const todos = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TODOS_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        }
      case FETCH_TODOS_SUCCESS:
        return {
          ...state,
          loading: false,
          items: action.payload.todos
        }
      case FETCH_TODOS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          items: []
        }
      default:
        return state
    }
  }
  
  export default todos
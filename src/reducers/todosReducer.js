import {
  FETCH_TODOS_BEGIN,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  ADD_TODO,
  REMOVE_TODO,
  CHANGE_TODO_STATUS
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
      case ADD_TODO:
        return {
          ...state,
          items: [...state.items, action.payload.todo]
        }
      case REMOVE_TODO:
        function filterFunc(value, index) {
          return value.id !== action.payload.todoId
        } 
        const filteredItems = state.filter(filterFunc)
        return {
          ...state,
          items: filteredItems
        }
      case CHANGE_TODO_STATUS:
        function mapFunc(value, index) {
          if (value.id === action.payload.todoId) {
            return {
              ...value,
              completed: action.payload.completed
            }
          }
          return value 
        }
        const mappedItems = state.map(mapFunc)
        return {
          ...state,
          items: mappedItems
        }
      default:
        return state
    }
  }
  
  export default todos
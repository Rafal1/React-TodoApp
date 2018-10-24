export const FETCH_TODOS_BEGIN   = 'FETCH_TODOS_BEGIN'
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS'
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE'
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const CHANGE_TODO_STATUS = 'CHANGE_TODO_STATUS'

export const fetchTodosBegin = () => ({
  type: FETCH_TODOS_BEGIN
})

export const fetchTodosSuccess = todos => ({
  type: FETCH_TODOS_SUCCESS,
  payload: { todos }
})

export const fetchTodosError = error => ({
  type: FETCH_TODOS_FAILURE,
  payload: { error }
})

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: { todo }
})

export const removeTodo = (todoId) => ({
  type: REMOVE_TODO,
  payload: { todoId }
})

export const changeTodoStatus = (todoId, completed) => ({
  type: CHANGE_TODO_STATUS,
  payload: { todoId, completed }
})
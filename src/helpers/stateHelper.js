const getState = (dispatch) => new Promise((resolve) => {
    dispatch((dispatch, getState) => {resolve(getState())})
  })

const createTodo = (title, userId) => {
  return {
    title: title,
    userId: userId,
    completed: false
  }
} 

export { getState, createTodo };
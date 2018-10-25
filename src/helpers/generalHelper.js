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

function createGuid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

export { getState, createTodo, createGuid }
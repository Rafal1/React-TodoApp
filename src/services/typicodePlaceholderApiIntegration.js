import axios from 'axios'
import { fetchTodosBegin, fetchTodosSuccess, fetchTodosError } from './../actions/todosActions'
import { addTodo, removeTodo, changeTodoStatus } from './../actions/todosActions'

const config = require('./../config')

const ENDPOINT_PHRASES = {
    TODOS: 'todos',
}

const PARAM_NAME = {
    USER_ID: 'userId',
}

const typicodePlaceholderApiIntegration = {
    getTodosForUserId: (userId) => {
        return (dispatch) => {
            dispatch(fetchTodosBegin())
            axios.get(config.typicodePlaceholderApiUrl + '/' + ENDPOINT_PHRASES.TODOS + '?' + PARAM_NAME.USER_ID + '=' + userId)
                .then(res => {
                    let response = res.data.slice(0, 10)
                    function filterFunc(value, index) {
                        return value.userId === userId
                    }
                    const filteredRecords = response.filter(filterFunc)
                    return dispatch(fetchTodosSuccess(filteredRecords))
                })
                .catch(error => {
                    console.log(error)
                    dispatch(fetchTodosError(error))
                })
        }
    },
    putToDoWithId: (todoId, body) => {
        return (dispatch) => {
            axios({
                url: config.typicodePlaceholderApiUrl + '/' + ENDPOINT_PHRASES.TODOS + '/' + todoId,
                method: "put",
                data: body
            })
                .then(res => {
                    return dispatch(changeTodoStatus(body.id, body.completed))
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
    postTodoForUserId: (body) => {
        return (dispatch) => {
            axios({
                url: config.typicodePlaceholderApiUrl + '/' + ENDPOINT_PHRASES.TODOS,
                method: "post",
                data: body
            })
                .then(res => {
                    body.id = res.data.id
                    return dispatch(addTodo(body))
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
    deleteTodo: (todoId) => {
        return (dispatch) => {
            axios.delete(config.typicodePlaceholderApiUrl + '/' + ENDPOINT_PHRASES.TODOS + '/' + todoId)
            .then(res => {
                return dispatch(removeTodo(parseInt(todoId)))
            })
        }
    },
}

export default typicodePlaceholderApiIntegration

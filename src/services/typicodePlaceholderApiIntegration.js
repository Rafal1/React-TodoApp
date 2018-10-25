import axios from 'axios'
import { fetchTodosBegin, fetchTodosSuccess, fetchTodosError } from './../actions/todosActions'
import { addTodo, removeTodo, changeTodoStatus } from './../actions/todosActions'
import { createGuid } from './../helpers/generalHelper'

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
    changeTodoStatus: (body) => {
        return (dispatch) => {
            axios({
                url: config.typicodePlaceholderApiUrl + '/' + ENDPOINT_PHRASES.TODOS + '/' + body.id,
                method: "put",
                data: body
            })
            .then(res => {
                return dispatch(changeTodoStatus(body))
            })
            .catch(error => {
                console.log('To do doesn\'t exists on the server. Change has been made locally. ' + error)
                return dispatch(changeTodoStatus(body))
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
                // body.id = res.data.id
                body.id = createGuid()
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
                return dispatch(removeTodo(todoId))
            })
            .catch(error => {
                console.log('To do doesn\'t exists on the server. Change has been made locally. ' + error)
                dispatch(removeTodo(todoId))
            })
        }
    },
}

export default typicodePlaceholderApiIntegration

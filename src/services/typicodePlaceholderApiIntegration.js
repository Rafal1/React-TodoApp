import axios from 'axios'
const config = require('./../config');

const ENDPOINT_PHRASES = {
    TODOS : 'todos',
}

module.exports = {
    getTodosForUserId : ( userId ) => {
        axios.get(config.typicodePlaceholderApiUrl + '/' + ENDPOINT_PHRASES.TODOS + '?userId=' + userId)
        .then(res => {
            return res.data
        })
    },
    putToDoWithId : ( todoId, body ) => {
        axios({
            url: config.typicodePlaceholderApiUrl + '/' + ENDPOINT_PHRASES.TODOS + '/' + todoId,
            method: "put",
            data: body
           })
        .then(res => {
            return res.data
        })
    },
    postTodoForUserId : ( userId, body ) => {
        axios({
            url: config.typicodePlaceholderApiUrl + '/' + ENDPOINT_PHRASES.TODOS + '?userId=' + userId,
            method: "post",
            data: body
           })
        .then(res => {
            return res.data
        })
    },
    deleteTodoForUserId : ( todoId ) => {
        axios.delete(config.typicodePlaceholderApiUrl + '/' + ENDPOINT_PHRASES.TODOS + '/' + todoId)
        .then(res => {
            return res.data
        })
    },
}



  
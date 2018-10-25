import React, { Component } from 'react'
import './../App.css'
import UserIdInput from '../components/UserIdInput'
import TodoInput from '../components/TodoInput'
import { connect } from 'react-redux'
import typicodePlaceholderApiIntegration from '../services/typicodePlaceholderApiIntegration'
import { changeUserId } from './../actions/userIdActions'
import { changeUserCurrentNote } from './../actions/userCurrentNoteActions'

import { getState, createTodo } from './../helpers/stateHelper'
const config = require('./../config')


class App extends Component {
  componentDidMount() {
    this.props.dispatch(typicodePlaceholderApiIntegration.getTodosForUserId(this.props.userId));
  }

  render() {
    const todos = this.props.todosOfUser.items.map((item) => {
      let deleteButton = null
      if (item.completed === true) {
        deleteButton = <div className='todoControlBox'><button onClick={() => this.props.deleteTodo(item.id)}>Delete</button></div>
      }
      return (
        <li key={item.id} className='todoItem'>
          <div className='setInRow'>
            <div className='todoContent'>{item.title}</div>
            <div className='todoControlBox'>
              <input type='checkbox' defaultChecked={item.completed} onClick={() => this.props.isTodoDone(item.id)} onTouchEnd={ () => this.props.isTodoDone(item.id)} />
            </div>
            {deleteButton}
          </div>
        </li>
      )
    })

    return (
      <div className='mainAppClass'>
        <h2>TODO APP</h2>
        <UserIdInput
          value={this.props.userId}
          onBlurEv={this.props.userIdInputOnBlur}
        />
        <TodoInput
          onClickEv={this.props.todoInputOnClick}
          onChangeEv={this.props.todoInputOnChange}
          value={this.props.userCurrentNote}
        />
        <ol className='todosList'>{todos}</ol>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteTodo: async (todoId) => {
      dispatch(typicodePlaceholderApiIntegration.deleteTodo(todoId))
    },
    isTodoDone: async (todoId) => {
      const state = await getState(dispatch)
      console.log('actionN')
      function findTodoWithId(value, index) {
        return value.id === todoId
      }
      let filteredTodos = state.todos.items.filter(findTodoWithId)
      for (let i = 0; i < filteredTodos.length; i++) {
        dispatch(typicodePlaceholderApiIntegration.changeTodoStatus(filteredTodos[i]))
      }
    },
    userIdInputOnBlur: async (event) => {
      if (event.target.value === '') {
        dispatch(changeUserId(event.target.value))
        return
      }
      let valueFromInput = parseInt(event.target.value)
      if (!Number.isInteger(valueFromInput)) {
        alert('userId must be Integer') //enums dict
        return
      }
      dispatch(changeUserId(valueFromInput))
      dispatch(typicodePlaceholderApiIntegration.getTodosForUserId(valueFromInput))
    },
    todoInputOnClick: async (event) => {
      const state = await getState(dispatch)
      if (state.userCurrentNote === '') {
        alert('Todo can\'t be empty')
        return
      }
      if (state.todos.items.length >= config.maxTodosDisplay) {
        alert(`There is no place for your note. You can have max. ${config.maxTodosDisplay} notes`)
        return
      }
      let newTodo = createTodo(state.userCurrentNote, state.userId)
      dispatch(typicodePlaceholderApiIntegration.postTodoForUserId(newTodo))
      dispatch(changeUserCurrentNote(''))
    },
    todoInputOnChange: async (event) => {
      //validate
      dispatch(changeUserCurrentNote(event.target.value))
    },
    dispatch: dispatch
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todosOfUser: state.todos,
    userId: state.userId,
    userCurrentNote: state.userCurrentNote
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App)


import React, { Component } from 'react'
import './../App.css'
import UserIdInput from '../components/UserIdInput'
import { connect } from 'react-redux'
import typicodePlaceholderApiIntegration from '../services/typicodePlaceholderApiIntegration'
import { changeUserId } from './../actions/userIdActions'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(typicodePlaceholderApiIntegration.getTodosForUserId(this.props.userId));
  }
  // componentDidUpdate() {
  //   this.props.dispatch(typicodePlaceholderApiIntegration.getTodosForUserId(this.props.userId));
  // }
  render() {
    const todos = this.props.todosOfUser.items.map((item) => {
      let deleteButton = null
      if (item.completed === true) {
        deleteButton = <div className='todoControlBox'><button onClick={ () => {} }>Delete</button></div>
      }
      return (
        <li key={item.id} className='todoItem'> {/* dać id z api */}
          <div className='setInRow'>
            <div className='todoContent'>{item.title}</div>
            <div className='todoControlBox'>
              <input type='checkbox' defaultChecked={item.completed} onChange={this.props.isTodoDone}></input>
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
        <div className='addNoteInput'>
          <label htmlFor="todoContent">Add todo note: </label>
          <br/>
          <div className='setInRow'>
            <input type='text' id='todoContent' maxLength='48'></input><button onClick={ () => {} }>Add</button>
          </div>
        </div>
        <ol className='todosList'>{todos}</ol>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    isTodoDone: async () => {
    },
    userIdInputOnBlur: (event) => {
      if (event.target.value === '') {
        dispatch(changeUserId(event.target.value))
        return
      }
      let valueFromInput = parseInt(event.target.value)
      if (!Number.isInteger(valueFromInput)) {
        alert('userId must be Integer')
        return
      }
      dispatch(changeUserId(valueFromInput))
      console.log('valueFromInput: ' + valueFromInput)
      dispatch(typicodePlaceholderApiIntegration.getTodosForUserId(valueFromInput))
    },
    dispatch: dispatch
  }
}

const mapStateToProps = (state, ownProps) => {
  // let todosOfUser = [] // state.todos

  // if (state.userId >= 0) {
  //   todosOfUser = typicodePlaceholderApiIntegration.getTodosForUserId(state.userId)
  // }
  return {
    todosOfUser: state.todos,
    userId: state.userId
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App)


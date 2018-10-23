import React, { Component } from 'react'
import './../App.css'
import UserIdInput from '../components/UserIdInput'
import { connect } from 'react-redux'
import typicodePlaceholderApiIntegration from '../services/typicodePlaceholderApiIntegration'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(typicodePlaceholderApiIntegration.getTodosForUserId(1));
  }

  render() {
    //this.props. -> from dispatch
    // console.log('todosOfUser: ' + JSON.stringify(td))

    const todos = this.props.todosOfUser.items.map((item) => {
      let deleteButton = null
      if (item.completed === true) {
        deleteButton = <div class='todoControlBox'><button onClick=''>Delete</button></div>
      }
      return (
        <li key={item.id} className='todoItem'> {/* dać id z api */}
          <div class='setInRow'>
            <div class='todoContent'>{item.title}</div>
            <div class='todoControlBox'>
              <input type='checkbox' defaultChecked={item.completed} onChange={this.props.isDone()}></input>
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
          value=''//{this.props.value}
          onBlur=''
        />
        <div className='addNoteInput'>
          <label for="todoContent">Add todo note: </label>
          <br />
          <div class='setInRow'>
            <input type='text' id='todoContent' maxLength='48'></input><button onClick=''>Add</button>
          </div>
        </div>
        <ol className='todosList'>{todos}</ol>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    isDone: async () => {

    },
    dispatch : dispatch
  }
}

const mapStateToProps = (state, ownProps) => {
  // let todosOfUser = [] // state.todos

  // if (state.userId >= 0) {
  //   todosOfUser = typicodePlaceholderApiIntegration.getTodosForUserId(state.userId)
  // }
  return {
    todosOfUser: state.todos
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App)


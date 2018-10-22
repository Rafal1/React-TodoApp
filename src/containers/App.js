import React, { Component } from 'react'
import logo from './../logo.svg'
import './../App.css'
import UserIdInput from '../components/UserIdInput'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div class='mainAppClass'>
        <h2>TODO APP</h2>
        <UserIdInput
          value=''//{this.props.value}
          onBlur=''
        />
        <div class='addNoteInput'>
          <label for="todoContent">Add todo note: </label>
          <br/>
          <div class='setInRow'>
            <input type='text' id='todoContent' maxlength='48'></input><button onclick=''>Add</button>
          </div>
        </div>
        <ol className='todosList'>
          <li key='' className='todoItem'> {/* dać id z api */}
            <div class='setInRow'>
              <div class='todoContent'>Hej dkj dfhj ahjk hdjkaf hkjfh sdjkf d fjfhj shjk hsjdkfh sdjkhsd jsdhfj kshfjsfhj j hdsjf hsdk  </div>
              <div class='todoControlBox'>
                <input type='checkbox' value=''></input>
              </div>
              <div class='todoControlBox'>
                <button onclick=''>Delete</button>
              </div>
            </div>
          </li>
          <li key='' className='todoItem'> {/* dać id z api */}
            <div class='setInRow'>
              <div class='todoContent'>Hej dkj dfhj ahjk hdjkaf </div>
              <div class='todoControlBox'>
                <input type='checkbox' value=''></input>
              </div>
              <div class='todoControlBox'>
                <button onclick=''>Delete</button>
              </div>
            </div>
          </li>
          <li key='' className='todoItem'> {/* dać id z api */}
            <div class='setInRow'>
              <div class='todoContent'>asssssssssssssssssssssssssssssssssddddddddddddddddddddddddddddddddddddddddddddddddddmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</div>
              <div class='todoControlBox'>
                <input type='checkbox' value=''></input>
              </div>
              <div class='todoControlBox'>
                <button onclick=''>Delete</button>
              </div>
            </div>
          </li>
        </ol>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
}

const mapStateToProps = (state, ownProps) => {
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


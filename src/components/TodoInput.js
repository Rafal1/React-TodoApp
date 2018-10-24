import React from 'react'

const TodoInput = ({ onClickEv, onChangeEv }) => (
  <div className='addNoteInput'>
    <label htmlFor="todoContent">Add todo note: </label>
    <br/>
    <div className='setInRow'>
      <input type='text' id='todoContent' maxLength='48' onChange={onChangeEv}></input><button onClick={onClickEv}>Add</button>
    </div>
  </div>
)

export default TodoInput
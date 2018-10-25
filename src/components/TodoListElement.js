import React from 'react'

const TodoListElement = ({ item, deleteTodo, isTodoDone }) => {
  let deleteButton = null
  if (item.completed === true) {
    deleteButton = <div className='todoControlBox'><button onClick={() => deleteTodo(item.id)}>Delete</button></div>
  }
  return (
    <li key={item.id} className='todoItem'>
      <div className='setInRow'>
        <div className='todoContent'>{item.title}</div>
        <div className='todoControlBox'>
          <input type='checkbox' defaultChecked={item.completed} onClick={() => isTodoDone(item.id)} onTouchEnd={ () => isTodoDone(item.id)} />
        </div>
        {deleteButton}
      </div>
    </li>
  )
}

export default TodoListElement
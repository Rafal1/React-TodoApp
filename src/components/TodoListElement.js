import React from 'react'

import { Row, Content, ControlBox} from '../styledComponents/listStyle'


const TodoListElement = ({ item, deleteTodo, isTodoDone }) => {
  let deleteButton = null
  if (item.completed === true) {
    deleteButton = <div className='todoControlBox'><button onClick={() => deleteTodo(item.id)}>Delete</button></div>
  }
  return (
    <li key={item.id} className='todoItem'>
      <Row>
        <Content>{item.title}</Content>
        <ControlBox>
          <input type='checkbox' defaultChecked={item.completed} onClick={() => isTodoDone(item.id)} onTouchEnd={ () => isTodoDone(item.id)} />
        </ControlBox>
        <ControlBox>{deleteButton}</ControlBox>
      </Row>
    </li>
  )
}

export default TodoListElement
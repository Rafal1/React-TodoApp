import React from 'react'

import { Row, Content, ControlBox, TodoItem} from '../styledComponents/listStyle'


const TodoListElement = ({ item, deleteTodo, isTodoDone }) => {
  let deleteButton = null
  if (item.completed === true) {
    deleteButton = <ControlBox><button onClick={() => deleteTodo(item.id)}>Delete</button></ControlBox>
  }
  return (
    <TodoItem key={item.id}>
      <Row>
        <Content>{item.title}</Content>
        <ControlBox>
          <input type='checkbox' defaultChecked={item.completed} onClick={() => isTodoDone(item.id)} onTouchEnd={ () => isTodoDone(item.id)} />
        </ControlBox>
        {deleteButton}
      </Row>
    </TodoItem>
  )
}

export default TodoListElement
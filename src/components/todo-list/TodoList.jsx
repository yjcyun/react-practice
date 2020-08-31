import React, { Fragment } from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);
  return (
    <div className='ui middle aligned divided list'>
      {todos.map(todo => (
        <Fragment key={todo.id}>
          <TodoItem todo={todo}/>
        </Fragment>
      ))}
    </div>
  )
}

export default TodoList

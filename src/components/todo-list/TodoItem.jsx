import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodoAction, toggleTodoAction } from './actions';

const TodoItem = ({ todo }) => {

  const dispatch = useDispatch();
  const deleteTodo = todoId => dispatch(deleteTodoAction(todoId))
  const toggleTodo = todoId => dispatch(toggleTodoAction(todoId));

  return (
    <div className='item'>
      <div className='right floated content'>
        <div className='ui teal button' onClick={()=>toggleTodo(todo.id)}>{todo.complete ? 'Undo' : 'Complete'}</div>
        <div className='ui red button' onClick={() => deleteTodo(todo.id)}>Delete</div>
      </div>
      <div className={`content ${todo.complete? 'line-through' : ''}`}>
        {todo.name}
      </div>
    </div>
  )
}

export default TodoItem

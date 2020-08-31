import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodoAction } from './actions';
import uuid from 'uuid/v4';

const TodoInput = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  const addTodo = todo => dispatch(addTodoAction(todo))

  const onFormSubmit = e => {
    e.preventDefault();
    if (todo.trim() === '') return;

    addTodo({
      id: uuid(),
      name: todo,
      complete: false
    });

    setTodo('');
  }

  const onInputChange = e => {
    setTodo(e.target.value);
  }

  return (
    <form
      className='ui fluid input action'
      onSubmit={onFormSubmit}
    >
      <input
        type='text'
        name='todo'
        placeholder='ex. buy almond milk'
        value={todo}
        onChange={onInputChange}
      />
      <button type='submit' className='button ui'>Add</button>
    </form>
  )
}

export default TodoInput
import React from 'react'
import TodoList from './TodoList'
import TodoInput from './TodoInput'

const App = () => {
  return (
    <div className='column eight wide'>
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default App
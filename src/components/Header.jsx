import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='ui secondary pointing menu'>
      <Link to='/accordion' className='item'>
        Accordion
      </Link>
      <Link to='/list' className='item'>
        Search
      </Link>
      <Link to='/dropdown' className='item'>
       Dropdown
      </Link>
      <Link to='/translate' className='item'>
        Translate
      </Link>
      <Link to='/songs-redux' className='item'>
        Songs
      </Link>
      <Link to='/counter' className='item'>
        Counter
      </Link>
      <Link to='/blog-post' className='item'>
        BlogPost
      </Link>
      <Link to='/todo-list' className='item'>
        Todo
      </Link>
    </div>
  )
}

export default Header

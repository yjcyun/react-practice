import React from 'react'
import { increment, decrement } from './actions'
import { connect } from 'react-redux'

const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <button
        className='ui button basic positive'
        onClick={() => increment()}
      >
        Increment
      </button>
      <button
        className='ui button basic negative'
        onClick={() => decrement()}
      >
        Decrement
      </button>
      <div>Current Count: {count}</div>
    </div>
  )
}

const mapStateToProps = state => {
  return { count: state.counter }
}

export default connect(
  mapStateToProps,
  { decrement, increment }
)(Counter)
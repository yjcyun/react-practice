import React from 'react'
import SongList from './SongList'
import SongDetail from './SongDetail'

const App = () => {
  return (
    <>
      <div className='column eight wide'>
        <SongList />
      </div>
      <div className='column eight wide'>
        <SongDetail />
      </div>
    </>
  )
}

export default App
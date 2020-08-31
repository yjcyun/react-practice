import { combineReducers } from 'redux';
import { counterReducer } from './counter/reducers';
import { songsReducer, selectedSongReducer } from './songs-redux/reducers';

const rootReducer =  combineReducers({
  counter: counterReducer,
  songs: songsReducer,
  selectedSong: selectedSongReducer
})

export default rootReducer
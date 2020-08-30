import { combineReducers } from 'redux';

// Static list of songs
const songsReducer = () => {
  return [
    { title: 'Barbie Girl', duration: '4:05' },
    { title: 'No Scrubs', duration: '3:45' },
    { title: 'All Star', duration: '2:14' },
    { title: 'Song List One', duration: '4:15' },
  ]
};

const selectedSongReducer = (selectedSong = null, action) => {
  switch (action.type) {
    case 'SONG_SELECTED':
      return action.payload;
    default:
      return selectedSong;
  }
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
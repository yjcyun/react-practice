// Static list of songs
export const songsReducer = () => {
  return [
    { title: 'Barbie Girl', duration: '4:05' },
    { title: 'No Scrubs', duration: '3:45' },
    { title: 'All Star', duration: '2:14' },
    { title: 'Song List One', duration: '4:15' },
  ]
};

export const selectedSongReducer = (selectedSong = null, action) => {
  switch (action.type) {
    case 'SONG_SELECTED':
      return action.payload;
    default:
      return selectedSong;
  }
};
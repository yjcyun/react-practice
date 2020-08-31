import { combineReducers } from 'redux';
import { counterReducer } from './counter/reducers';
import { songsReducer, selectedSongReducer } from './songs-redux/reducers';
import { postsReducer } from './blog-posts/reducers/postsReducer';
import { usersReducer } from './blog-posts/reducers/usersReducer';
import { todoReducer } from './todo-list/reducers/todosReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  songs: songsReducer,
  selectedSong: selectedSongReducer,
  posts: postsReducer,
  users: usersReducer,
  todos: todoReducer
})

export default rootReducer
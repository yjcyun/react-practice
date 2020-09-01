import streams from '../apis/streams';
import { SIGN_IN, SIGN_OUT } from "./types";

// when user signs in
export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  }
}
// when user signs out
export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}
// to create stream
export const createStream = formValues => async dispatch => {
  streams.post('/streams', formValues)
}

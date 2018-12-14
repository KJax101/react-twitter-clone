import types from '../types/user';

const initialState = {
  isLoggedIn: false,

}
// here we check to see if the action that just came in matches 
// one of the types that we know about
// if yes, then return the state which we tell it to
export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        isLoggedIn: true
      }
    default:
      return state
  }
}
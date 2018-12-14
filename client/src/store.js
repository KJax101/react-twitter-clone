import { createStore } from 'redux';

// setting default value so we can when intial state is undefined
//we will use it to store values as application state
const configureStore = (initialState = {}) => {
  // reducer below: Takes current state + action to yield new state
  return createStore((state = initialState) => state)
}

export default configureStore;

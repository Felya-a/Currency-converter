import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from 'redux-form';
import initializeReducer from "./initializeReducer.js"
import thunkMiddleware from "redux-thunk";



const reducers = combineReducers({
  form: formReducer,
  init: initializeReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store
export default store
import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { counterReducer } from "./features/Counter/counterState";

const appReducers = combineReducers({
    counter: counterReducer
})

// create redux store
export default createStore(appReducers, composeWithDevTools())

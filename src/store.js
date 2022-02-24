import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { counterMiddleware, counterReducer } from "./Counter/counterState";

const rootReducer = combineReducers({
    counter: counterReducer
})

export default createStore(
    rootReducer, 
    composeWithDevTools(
        applyMiddleware(counterMiddleware)
    )
);
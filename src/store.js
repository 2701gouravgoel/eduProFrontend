import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from "redux-thunk" 
import { productReducer } from './reducers/productReducers';

const reducer = combineReducers({
    products : productReducer,
})

const store  = createStore(reducer, applyMiddleware(thunk));

export default store;
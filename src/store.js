import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from "redux-thunk" 
import { productReducer } from './reducers/productReducers';
import { userReducer } from './reducers/userReducer';

const reducer = combineReducers({
    products : productReducer,
    user:userReducer
})

const store  = createStore(reducer, applyMiddleware(thunk));

export default store;
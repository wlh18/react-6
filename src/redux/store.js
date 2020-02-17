import {createStore, applyMiddleware, combineReducers} from 'redux'
import userReducer from './reducer'
import productReducer from './anothaReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise-middleware'

const rootReducer = combineReducers({
    userReducer,
    productReducer
})

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(promiseMiddleware)))
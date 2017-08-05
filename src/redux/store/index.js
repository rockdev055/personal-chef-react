import {
  combineReducers, 
  applyMiddleware, 
  createStore
} from 'redux'
import thunk from 'redux-thunk'
import auth from '../modules/Auth/reducer'

const rootReducer= combineReducers({
  auth
})

const middleware = [thunk]

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(...middleware))



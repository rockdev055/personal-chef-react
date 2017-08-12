import {
  combineReducers, 
  applyMiddleware, 
  createStore
} from 'redux'
import thunk from 'redux-thunk'
import auth from '../modules/Auth/reducer'
import households from '../modules/Households/reducer'
import { reducer as form } from 'redux-form'

const rootReducer= combineReducers({
  auth,
  form,
  households
})

const middleware = [thunk]

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(...middleware))



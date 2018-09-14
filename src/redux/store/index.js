import { combineReducers, createStore } from 'redux'
import auth from '../modules/Auth/reducer'
import households from '../modules/Households/reducer'
import members from '../modules/Members/reducer'
import meals from '../modules/Meals/reducer'
import error from '../modules/Errors/reducer'
import { reducer as form } from 'redux-form'
import middleware from '../../middleware'
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar'

const rootReducer = combineReducers({
  auth,
  form,
  households,
  meals,
  members,
  error,
  loadingBar
})

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  middleware
)

import { combineReducers } from 'redux'

import { productsList } from './Products/reducers'

export default combineReducers({
  products: productsList,
})

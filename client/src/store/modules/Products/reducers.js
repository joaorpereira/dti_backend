import produce from 'immer'
import * as types from './types'

const INITIAL_STATE = {
  products: [],
  loading: false,
  success: false,
}

export function productsList(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.REQUEST_PRODUCTS_LIST: {
        draft.loading = true
        break
      }
      case types.REQUEST_PRODUCTS_LIST_SUCCESS: {
        draft.loading = false
        draft.success = true
        draft.products = action.payload.products
        break
      }
      case types.REQUEST_PRODUCTS_LIST_FAIL: {
        draft.loading = false
        draft.success = false
        draft.products = []
        break
      }
      default:
    }
  })
}

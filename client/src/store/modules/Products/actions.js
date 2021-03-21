import * as types from './types'

export function requestProductsList() {
  return {
    type: types.REQUEST_PRODUCTS_LIST,
  }
}

export function requestProductsListSuccess(products) {
  return {
    type: types.REQUEST_PRODUCTS_LIST_SUCCESS,
    payload: { products },
  }
}

export function requestProductsListFail() {
  return {
    type: types.REQUEST_PRODUCTS_LIST_FAIL,
    payload: {},
  }
}

import { all } from 'redux-saga/effects'

import products from './Products/sagas'

export default function* rootSagas() {
  return yield all([products])
}

import { legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import { authReduser } from './authReduser';
import { composeWithDevTools } from 'redux-devtools-extension';
import { searchReduser } from './searchReduser';
import {favoriteReduser} from './favoriteReduser'
import createSagaMiddleware from 'redux-saga'
import { hotelWhatcher } from '../saga/hotelSaga';
const sagaMiddleware = createSagaMiddleware()

const rootReduser = combineReducers({
  auth: authReduser,
  search: searchReduser,
  favoriteshotels: favoriteReduser
})

export const store = createStore(rootReduser, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(hotelWhatcher)


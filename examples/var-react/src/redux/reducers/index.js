import { combineReducers } from 'redux'
import loading from './loading'
import productList from './productList'
import shoppingCart from './shoppingCart'

export default combineReducers({ loading, shoppingCart, productList })

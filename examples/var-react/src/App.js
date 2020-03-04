import './App.css'

import ProductList from './components/ProductList'
import { Provider } from 'react-redux'
import React from 'react'
import ShoppingCart from './components/ShoppingCart'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <ProductList />
      <ShoppingCart />
    </Provider>
  )
}

export default App

import React from 'react'
import { addItem } from '../redux/reducers/shoppingCart'
import { connect } from 'react-redux'

function ProductListItem({ item, addItem }) {
  return (
    <li>
      {item.name}
      <button onClick={() => addItem(item, 1)}>Add to Cart</button>
    </li>
  )
}

export default connect(
  null,
  { addItem }
)(ProductListItem)

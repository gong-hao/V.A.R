import { removeItem, setItemQuantity } from '../redux/reducers/shoppingCart'

import React from 'react'
import { connect } from 'react-redux'

function ShoppingCartItem({
  item,
  removeItem,
  setItemQuantity
}) {
  return (
    <li>
      {item.product.name} {item.quantity}
      <input
        type="number"
        value={item.quantity}
        onChange={e => setItemQuantity(item.product.id, e.target.value)} />
      <button onClick={() => removeItem(item.product.id)}>Remove</button>
    </li>
  )
}

export default connect(
  null,
  { removeItem, setItemQuantity }
)(ShoppingCartItem)
